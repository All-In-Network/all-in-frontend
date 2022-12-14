/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useState } from 'react'
import { Button, Nav, Spinner, Tab } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import { useNavigate } from 'react-router-dom'
import PageTitle from '../../Component/Comman/PageTitle'
import { CandleChart } from '../../Component/Market/Charting'
import { useIsConnected } from '../../hooks/useIsConnected'
import {
  useActions,
  useWalletDispatch,
  useWalletState,
} from '../../hooks/wallet'

function Market() {
  useIsConnected()

  const [isDisabled, setIsDisabled] = useState(true)

  const [target, setTarget] = useState()

  const [open, setOpen] = useState(false)

  const handleOpen = tar => {
    setTarget(tar)
    setOpen(true)
  }

  const handleClose = () => setOpen(false)

  const [currentBar, setCurrentBar] = useState()

  const { totalBalance, funded } = useWalletState()
  const { setBalance } = useWalletDispatch()
  const [state, setState] = useState({
    balance: 10000,
    price: 0,
  })

  const [order, setOrder] = useState({})

  const saveLast = useCallback(value => {
    setCurrentBar(value)
  }, [])

  const [SLInput, setSLInput] = useState('')
  const [TPInput, setTPInput] = useState('')

  const transaction = type => {
    setState({ ...state, price: currentBar?.close })

    const amount = 1
    setBalance({ totalBalance })
    const expected = amount / currentBar?.close
    const curPrice = currentBar?.close

    const def = 40
    let sl = 0
    let tp = 0

    if (SLInput) {
      setSLInput(parseInt(SLInput, 10))
      sl = SLInput
    } else sl = type === 'BUY' ? curPrice - def : curPrice + def

    if (TPInput) {
      setTPInput(parseInt(TPInput, 10))
      tp = TPInput
    } else tp = type === 'BUY' ? curPrice + def : curPrice - def

    setOrder({
      price: curPrice,
      amount,
      type,
      status: 'pending',
      pair: 'BTC/USD',
      sl: parseInt(sl, 10),
      tp: parseInt(tp, 10),
      expected,
    })
  }

  return (
    <>
      <div className="body-header border-bottom d-flex py-3 mb-3">
        <PageTitle
          pagetitle={funded.isFunded ? 'Live Market' : 'Test Market'}
        />
      </div>
      <div className="container-xxl">
        <div className="row g-3 mb-3 row-deck">
          <div className="col-xl-12 col-xxl-8">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-body">
                  <div style={{ height: '690px' }}>
                    <div
                      style={{
                        position: 'relative',
                        boxSizing: 'content-box',
                        width: '100%',
                        height: '100%',
                        margin: '0 auto !important',
                        padding: '0 !important',
                        fontFamily: '-apple-system',
                      }}
                    >
                      <div
                        style={{
                          width: '100%',
                          height: '100%',
                          background: 'transparent',
                          padding: '0 !important',
                        }}
                      >
                        <CandleChart
                          handleOpenModal={handleOpen}
                          saveLast={val => saveLast(val)}
                          balance={totalBalance}
                          order={order}
                          setIsDisabled={setIsDisabled}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-12 col-xxl-4">
            <div className="card">
              <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0 align-items-center">
                <h6 className="mb-0 fw-bold ">Trade Panel</h6>
              </div>
              <div className="card-body">
                <Tab.Container defaultActiveKey="first">
                  <Nav
                    className="nav nav-tabs tab-body-header rounded d-inline-flex mb-4"
                    role="tablist"
                  >
                    <Nav.Item className="nav-item">
                      <Nav.Link
                        className="nav-link"
                        eventKey="first"
                        data-bs-toggle="tab"
                        href="#Market"
                        role="tab"
                        aria-selected="true"
                      >
                        Market
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content className="tab-content">
                    <Tab.Pane
                      className="tab-pane fade"
                      id="Market"
                      eventKey="first"
                    >
                      <div className="row g-3">
                        <div className="col-lg-12">
                          <div className="d-flex align-items-center justify-content-between my-3">
                            <span className="small text-muted">Avbl</span>
                            <span className="">{Math.ceil(totalBalance)}</span>
                          </div>

                          <div className="input-group mb-3">
                            <span className="input-group-text">Price</span>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Entry Price"
                              value={state.price}
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label">TP/SL</label>
                            <div className="input-group mb-3">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Take Profit"
                                onChange={() => {}}
                                value={TPInput}
                                onInput={e => setTPInput(e.target.value)}
                              />
                            </div>
                            <div className="input-group mb-3">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Stop Loss"
                                onChange={() => {}}
                                value={SLInput}
                                onInput={e => setSLInput(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="mb-3 d-flex justify-content-between">
                            <Button
                              disabled={isDisabled}
                              onClick={() => transaction('BUY')}
                              className="btn btn-light-success px-5 py-2 text-uppercase"
                            >
                              Buy
                            </Button>
                            <Button
                              disabled={isDisabled}
                              onClick={() => transaction('SELL')}
                              className="btn btn-light-danger px-5 py-2 text-uppercase"
                            >
                              Sell
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Alert show={open} handleClose={handleClose} type={target} />
    </>
  )
}

export default Market

function Alert({ show, handleClose, type, customFn }) {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const { createFundingAccount } = useActions()

  const onClick = useCallback(() => {
    setIsLoading(true)
    if (type === 'win') {
      createFundingAccount().finally(() => setIsLoading(false))
    } else if (type === 'loss') {
      navigate('/Dashboard')
    }
    handleClose()
    setIsLoading(false)
  }, [createFundingAccount, customFn, handleClose, type])

  return (
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>
          {type === 'win'
            ? 'Congratulations! you are Funded'
            : 'We are sorry you loss the account :('}
        </Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="primary" onClick={onClick} disabled={isLoading}>
          {isLoading && (
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          )}
          {type === 'win' ? 'Claim Funding Account!' : 'Go to Test Dashboard'}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
