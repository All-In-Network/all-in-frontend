import React, {
    useEffect,
    useRef,
    useState,
} from "react";
import { createChart } from "lightweight-charts";

const ApiKey = "PKTNGP95BJSQC9PWY5S2";
const SecretKey = "Abu7skAWhEuro3cXfv2l8lf4HfliSLiaharsxElT";

const HEIGHT = 690;

let currentBar;
let trades = [];
let priceLines = [];

export const CandleChart = ({
    saveLast,
    order,
    balanceInfo,
    setIsDisabled
}) => {
    const elRef = useRef();
    const chartRef = useRef();
    const candlestickSeriesRef = useRef();
    const [initCandles, setInitCandles] = useState([]);
    const [lastCandle, setLastCandle] = useState({});

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function getInitCandles() {
            var start = new Date(Date.now() - (7200 * 1000)).toISOString();
            const BarsUrl = `https://data.alpaca.markets/v1beta2/crypto/bars?symbols=BTC/USD&timeframe=1Min&start=${start}`;

            fetch(BarsUrl, {
                headers: {
                    "APCA-API-KEY-ID": ApiKey,
                    "APCA-API-SECRET-KEY": SecretKey,
                },
            })
            .then((r) => r.json())
            .then((response) => {
                console.log(response);

                const data = response.bars["BTC/USD"].map((bar) => ({
                    open: bar.o,
                    high: bar.h,
                    low: bar.l,
                    close: bar.c,
                    time: Date.parse(bar.t) / 1000,
                }));
                currentBar = data[data.length - 1];
                console.log(data);
                setInitCandles(data);
            });
        }

        getInitCandles();
    }, []);

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
        });

        candlestickSeriesRef.current = chartRef.current.addCandlestickSeries();
        candlestickSeriesRef.current.setData(initCandles);

        return () => chartRef.current.remove();
    }, [initCandles]);

    useEffect(() => {
        function createOrdeLine() {
            if (Object.keys(order).length === 0) {
                return;
            }

            let color = order.type === "SELL" ? "#d32f2f" : "#2e7d32";

            let newLine = candlestickSeriesRef.current.createPriceLine({
                price: order.price,
                color: color,
                lineWidth: 2,
                lineStyle: 2,
                axisLabelVisible: true,
                title: order.type,
            });

            order.line = newLine;
            setOrders([...orders, order]);
            priceLines.push(newLine);
        }

        createOrdeLine();
    }, [order]);

    useEffect(() => {
        function reviewOpenOrders() {
            if (orders.length === 0) {
                return;
            }

            let color;
            orders.forEach((order) => {
                let orderType = '';
                orderType = order.type;
                console.log(`HERE ${orderType}`);

                if (orderType == 'SELL' || orderType == 'BUY') {
                    if (order.status === "pending") {
                        balanceInfo.balance -= order.amount;
                        order.status = 'done';

                        // inverted color for stop order
                        color = orderType == 'BUY' ? '#d32f2f' : '#2e7d32';
                        
                        // create line on chart
                        let newStopLine = candlestickSeriesRef.current.createPriceLine({
                            price: order.sl,
                            color: color,
                            lineWidth: 2,
                            lineStyle: 2,
                            axisLabelVisible: true,
                            title: 'SL',
                        });
                        
                        let type = '';

                        if (orderType == 'BUY') {
                            type = 'SL BUY';
                        }
                        else {
                            type = 'SL SELL';
                        }
                        
                        // create new order object
                        let newStopOrder = {
                            'price' : order.sl,
                            'type'  : type,
                            'status': 'pending',
                            'line'  : newStopLine,
                            'amount': order.expected,
                            'pair'  : order.pair,
                            'sl'    : null,
                            'tp'    : null,
                            'expected': order.expected * order.sl,
                        }

                        let newTPLine = candlestickSeriesRef.current.createPriceLine({
                            price: order.tp,
                            color: '#2e7d32',
                            lineWidth: 2,
                            lineStyle: 2,
                            axisLabelVisible: true,
                            title: 'TP',
                        });

                        if (orderType == 'BUY') {
                            type = 'TP BUY';
                        }
                        else {
                            type = 'TP SELL';
                        }

                        let newTPOrder = {
                            'price' : order.tp,
                            'type'  : type,
                            'status': 'pending',
                            'line'  : newTPLine,
                            'amount': order.expected,
                            'pair'  : order.pair,
                            'sl'    : null,
                            'tp'    : null,
                            'expected': order.expected * order.tp,
                        }

                        setOrders([...orders, newStopOrder, newTPOrder]);
                        priceLines.push(newStopLine);
                    }

                } else if (orderType == 'TP BUY' || order == 'TP SELL') {

                    // buy
                    console.log(lastCandle.close, order.price)
                    if (orderType == 'TP BUY') {
                        if (lastCandle.close >= order.price && order.status == 'pending') {
                            balanceInfo.balance += order.expected + 10;
                            order.status = 'done';
                            orders.forEach((order => candlestickSeriesRef.current.removePriceLine(order.line)));
                            setOrders([]);
                            alert("GANASTE");
                        }
                    } else { // sell
                        console.log("HEREEE")
                        if (lastCandle.close <= order.price && order.status == 'pending') {
                            balanceInfo.balance += order.expected + 10;
                            order.status = 'done';
                            orders.forEach((order => candlestickSeriesRef.current.removePriceLine(order.line)));
                            setOrders([]);
                            alert("GANASTE");
                        }
                    }
                } else if (orderType == 'SL BUY' || orderType == 'SL SELL') {
                    if (orderType == 'SL BUY') {
                        console.log(lastCandle.close, order.price)
                        if (lastCandle.close <= order.price && order.status == 'pending') {
                            balanceInfo.balance += order.expected - 10;
                            order.status = 'done';
                            orders.forEach((order => candlestickSeriesRef.current.removePriceLine(order.line)));
                            setOrders([]);
                            alert("STOP LOSS ALCANZADO");
                        }
                    } else {  // sell
                        if (lastCandle.close >=  order.price && order.status == 'pending') {
                            balanceInfo.balance += order.expected - 10;
                            order.status = 'done';
                            orders.forEach((order => candlestickSeriesRef.current.removePriceLine(order.line)));
                            setOrders([]);
                            alert("STOP LOSS ALCANZADO");
                        }
                    }
                }
            });
        }
    
        reviewOpenOrders();
        console.log(orders);
    }, [lastCandle]);

    useEffect(() => {
        if (
            !(
            lastCandle &&
            Object.keys(lastCandle).length === 0 &&
            lastCandle.constructor === Object
            )
        ) {
            candlestickSeriesRef.current.update(lastCandle);
        }
    }, [lastCandle]);

    useEffect(() => {
        const handler = () => {
            chartRef.current.resize(elRef.current.offsetWidth, HEIGHT);
        };
        window.addEventListener("resize", handler);
        return () => {
            window.removeEventListener("resize", handler);
        };
    }, []);

    useEffect(() => {
        const client = new WebSocket("wss://all-in.app/ws");

        client.onopen = () => {
            console.log("WebSocket Client Connected");
            setIsDisabled(false)
            client.send("");
        };

        client.onmessage = (message) => {
            let data = JSON.parse(message.data);

            for (let key in data) {
                const type = data[key].T;
                if (type === "t") {
                    trades.push(data[key].p);

                    let open = trades[0];
                    let high = Math.max(...trades);
                    let low = Math.min(...trades);
                    let close = trades[trades.length - 1];

                    let candle = {
                        time: currentBar.time + 60,
                        open: open,
                        high: high,
                        low: low,
                        close: close,
                    };
                    saveLast(candle);
                    setLastCandle(candle);
                }

                if (type === "b") {
                    let bar = data[key];
                    let timestamp = new Date(bar.t).getTime() / 1000;

                    currentBar = {
                        time: timestamp,
                        open: bar.o,
                        high: bar.h,
                        low: bar.l,
                        close: bar.c,
                    };

                    setLastCandle(currentBar);
                    trades = [];
                }
            }
        };

        return () => client.close();
    }, []);

    function newOrderLine(price, color, type) {
        let newLine = candlestickSeriesRef.current.createPriceLine({
            price: price,
            color: color,
            lineWidth: 2,
            lineStyle: 2,
            axisLabelVisible: true,
            title: type,
        });

        return newLine
    }

    return (
        <div ref={elRef}></div>
    );
};