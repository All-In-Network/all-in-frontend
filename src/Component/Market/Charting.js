/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React, { useEffect, useRef, useState } from 'react'
import { createChart } from 'lightweight-charts'
import { useWalletDispatch } from '../../hooks/wallet'

const ApiKey = 'PKTNGP95BJSQC9PWY5S2'
const SecretKey = 'Abu7skAWhEuro3cXfv2l8lf4HfliSLiaharsxElT'

const HEIGHT = 690

let currentBar
let trades = []
const priceLines = []

export function CandleChart({
  saveLast,
  order,
  balance,
  setIsDisabled,
  handleOpenModal,
}) {
  const elRef = useRef()
  const chartRef = useRef()
  const candlestickSeriesRef = useRef()
  const [initCandles, setInitCandles] = useState([])
  const [lastCandle, setLastCandle] = useState({})

  const [orders, setOrders] = useState([])

  const { setBalance } = useWalletDispatch()

  useEffect(() => {
    async function getInitCandles() {
      const start = new Date(Date.now() - 7200 * 1000).toISOString()
      const BarsUrl = `https://data.alpaca.markets/v1beta2/crypto/bars?symbols=BTC/USD&timeframe=1Min&start=${start}`

      fetch(BarsUrl, {
        headers: {
          'APCA-API-KEY-ID': ApiKey,
          'APCA-API-SECRET-KEY': SecretKey,
        },
      })
        .then(r => r.json())
        .then(response => {
          const data = response.bars['BTC/USD'].map(bar => ({
            open: bar.o,
            high: bar.h,
            low: bar.l,
            close: bar.c,
            time: Date.parse(bar.t) / 1000,
          }))
          currentBar = data[data.length - 1]
          saveLast(currentBar)
          setInitCandles(data)
        })
    }

    getInitCandles()
  }, [])

  useEffect(() => {
    chartRef.current = createChart(elRef.current, {
      width: elRef.current.offsetWidth,
      height: HEIGHT,
      timeScale: {
        rightOffset: 0,
        barSpacing: 15,
        fixLeftEdge: false,
        lockVisibleTimeRangeOnResize: true,
        rightBarStaysOnScroll: true,
        borderVisible: false,
        visible: true,
        timeVisible: true,
        secondsVisible: true,
      },
      rightPriceScale: {
        scaleMargins: {
          top: 0.3,
          bottom: 0.25,
        },
        borderVisible: false,
      },
    })

    candlestickSeriesRef.current = chartRef.current.addCandlestickSeries()
    candlestickSeriesRef.current.setData(initCandles)

    return () => chartRef.current.remove()
  }, [initCandles])

  useEffect(() => {
    function createOrdeLine() {
      if (Object.keys(order).length === 0) {
        return
      }

      let orderType = ''
      let priceAvg = 0
      orderType = order.type

      if (orders.length !== 0) {
        orders.forEach(ord => {
          if (ord.type === 'BUY' || ord.type === 'SELL') {
            if (ord.type === order.type) {
              priceAvg = Math.ceil((ord.price * 1 + order.price * 1) / 2)

              ord.amount += order.amount
              balance -= order.amount

              if (priceAvg !== order.price) {
                ord.price = priceAvg
                // delete old line
                candlestickSeriesRef.current.removePriceLine(ord.line)

                const nLine = candlestickSeriesRef.current.createPriceLine({
                  price: ord.price,
                  color: orderType === 'SELL' ? '#d32f2f' : '#2e7d32',
                  lineWidth: 2,
                  lineStyle: 2,
                  axisLabelVisible: true,
                  title: ord.type,
                })

                ord.line = nLine
              }
            }
          } else {
            ord.amount += order.amount
            ord.parentPrice = orders[0].price

            if (ord.type === 'TP BUY' || ord.type === 'SL SELL') {
              ord.expected = (ord.price - ord.parentPrice) * ord.amount
            } else if (ord.type === 'TP SELL' || ord.type === 'SL BUY') {
              ord.expected = (ord.parentPrice - ord.price) * ord.amount
            }
          }
        })
      } else {
        let color = orderType === 'SELL' ? '#d32f2f' : '#2e7d32'
        let type = ''

        const newLine = candlestickSeriesRef.current.createPriceLine({
          price: order.price,
          color,
          lineWidth: 2,
          lineStyle: 2,
          axisLabelVisible: true,
          title: order.type,
        })

        order.status = 'done'
        order.line = newLine

        // inverted color for stop order
        color = orderType === 'BUY' ? '#d32f2f' : '#2e7d32'

        // create stop loss line on chart
        const newStopLine = candlestickSeriesRef.current.createPriceLine({
          price: order.sl,
          color,
          lineWidth: 2,
          lineStyle: 2,
          axisLabelVisible: true,
          title: 'SL',
        })

        type = orderType === 'BUY' ? 'SL BUY' : 'SL SELL'

        // create new order object
        const newStopOrder = {
          price: order.sl,
          type,
          status: 'pending',
          line: newStopLine,
          amount: order.amount,
          pair: order.pair,
          sl: null,
          tp: null,
          expected: order.price - order.sl,
          parentPrice: order.price,
        }

        const newTPLine = candlestickSeriesRef.current.createPriceLine({
          price: order.tp,
          color: '#2e7d32',
          lineWidth: 2,
          lineStyle: 2,
          axisLabelVisible: true,
          title: 'TP',
        })

        type = orderType === 'BUY' ? 'TP BUY' : 'TP SELL'

        const newTPOrder = {
          price: order.tp,
          type,
          status: 'pending',
          line: newTPLine,
          amount: order.amount,
          pair: order.pair,
          sl: null,
          tp: null,
          expected: (order.price - order.tp) * 1,
          parentPrice: order.price,
        }

        setOrders([...orders, order, newStopOrder, newTPOrder])
        priceLines.push(newStopLine)
      }
    }

    createOrdeLine()
  }, [order])

  useEffect(() => {
    function reviewOpenOrders() {
      if (orders.length === 0) {
        return
      }

      orders.forEach(or => {
        let orderType = ''
        orderType = or.type

        if (orderType === 'TP BUY' || orderType === 'TP SELL') {
          // buy
          if (orderType === 'TP BUY') {
            if (lastCandle.close >= or.price && or.status === 'pending') {
              balance += or.expected
              or.status = 'done'
              orders.forEach(item =>
                candlestickSeriesRef.current.removePriceLine(item.line)
              )
              setBalance({ totalBalance: balance })
              setOrders([])
              handleOpenModal('win')
            }
          } else if (orderType === 'TP SELL') {
            if (lastCandle.close <= or.price && or.status === 'pending') {
              balance += 1 * or.expected
              or.status = 'done'
              orders.forEach(item =>
                candlestickSeriesRef.current.removePriceLine(item.line)
              )
              setBalance({ totalBalance: balance })
              setOrders([])
              handleOpenModal('win')
            }
          }
        } else if (orderType === 'SL BUY' || orderType === 'SL SELL') {
          if (orderType === 'SL BUY') {
            if (lastCandle.close <= or.price && or.status === 'pending') {
              balance -= 1 * or.expected
              or.status = 'done'
              orders.forEach(item =>
                candlestickSeriesRef.current.removePriceLine(item.line)
              )
              setBalance({ totalBalance: balance })
              setOrders([])
              // handleOpenModal('')
            }
          } else if (lastCandle.close >= or.price && or.status === 'pending') {
            balance -= -1 * or.expected
            or.status = 'done'
            orders.forEach(item =>
              candlestickSeriesRef.current.removePriceLine(item.line)
            )
            setBalance({ totalBalance: balance })
            setOrders([])
          }
        }
      })
    }

    reviewOpenOrders()
  }, [lastCandle])

  useEffect(() => {
    if (
      !(
        lastCandle &&
        Object.keys(lastCandle).length === 0 &&
        lastCandle.constructor === Object
      )
    ) {
      candlestickSeriesRef.current.update(lastCandle)
    }
  }, [lastCandle])

  useEffect(() => {
    const handler = () => {
      chartRef.current.resize(elRef.current.offsetWidth, HEIGHT)
    }
    window.addEventListener('resize', handler)
    return () => {
      window.removeEventListener('resize', handler)
    }
  }, [])

  useEffect(() => {
    const client = new WebSocket('wss://all-in.app/ws')

    client.onopen = () => {
      console.log('WebSocket Client Connected')
      setIsDisabled(false)
      client.send('')
    }

    client.onmessage = message => {
      const data = JSON.parse(message.data)

      for (const key in data) {
        const type = data[key].T
        if (type === 't') {
          trades.push(data[key].p)

          const open = trades[0]
          const high = Math.max(...trades)
          const low = Math.min(...trades)
          const close = trades[trades.length - 1]

          const candle = {
            time: currentBar.time + 60,
            open,
            high,
            low,
            close,
          }
          saveLast(candle)
          setLastCandle(candle)
        }

        if (type === 'b') {
          const bar = data[key]
          const timestamp = new Date(bar.t).getTime() / 1000

          currentBar = {
            time: timestamp,
            open: bar.o,
            high: bar.h,
            low: bar.l,
            close: bar.c,
          }

          setLastCandle(currentBar)
          trades = []
        }
      }
    }

    return () => client.close()
  }, [])

  return <div ref={elRef} />
}
