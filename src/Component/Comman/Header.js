import React from 'react'
import { Button, Dropdown } from 'react-bootstrap'
import { useGetNickName } from '../../hooks/useGetNickName'
import { useWalletDispatch, useWalletState } from '../../hooks/wallet'

function Header() {
  const { nickName } = useGetNickName()

  const { accounts, soulbound } = useWalletState()

  const { metadata } = soulbound ?? {}

  const { logout } = useWalletDispatch()

  const wallet = `${accounts?.[0].address.slice(
    0,
    8
  )}.....${accounts?.[0].address.slice(accounts?.[0]?.address?.length - 8)}`
  return (
    <div className="header">
      <nav className="navbar py-4">
        <div className="container-xxl">
          <div className="h-right d-flex align-items-center mr-5 mr-lg-0 order-1">
            <Dropdown className="dropdown user-profile ml-2 ml-sm-3 d-flex align-items-center mx-2 mx-lg-3">
              <Dropdown.Toggle
                as="dd"
                className="nav-link dropdown-toggle pulse p-0"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-display="static"
              >
                <img
                  className="avatar lg rounded-circle img-thumbnail"
                  src={`https://gateway.pinata.cloud/ipfs${
                    metadata.split('ipfs:/')[1]
                  }`}
                  alt="profile"
                />
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-end p-0 m-0">
                <div className="card border-0 w280">
                  <div className="card-body pb-0">
                    <div className="d-flex py-1">
                      <div className="flex-fill ms-3">
                        <p className="mb-1">
                          <span className="font-weight-bold">{nickName}</span>
                        </p>
                      </div>
                    </div>

                    <div>
                      <hr className="dropdown-divider border-dark" />
                    </div>
                    <span>{wallet}</span>
                  </div>
                  <div className="list-group m-2 ">
                    <Button
                      onClick={logout}
                      className="list-group-item list-group-item-action border-0 "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        className="me-3"
                      >
                        <rect
                          xmlns="http://www.w3.org/2000/svg"
                          className="st0"
                          width="24"
                          height="24"
                          style={{ fill: 'none' }}
                          fill="none"
                        />
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          d="M20,4c0-1.104-0.896-2-2-2H6C4.896,2,4,2.896,4,4v16c0,1.104,0.896,2,2,2h12  c1.104,0,2-0.896,2-2V4z"
                          style={{ fill: 'var(--primary-color)' }}
                          data-st="fill:var(--chart-color4);"
                        />
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          className="st0"
                          d="M15,6.81v2.56c0.62,0.7,1,1.62,1,2.63c0,2.21-1.79,4-4,4s-4-1.79-4-4c0-1.01,0.38-1.93,1-2.63V6.81  C7.21,7.84,6,9.78,6,12c0,3.31,2.69,6,6,6c3.31,0,6-2.69,6-6C18,9.78,16.79,7.84,15,6.81z M13,6.09C12.68,6.03,12.34,6,12,6  s-0.68,0.03-1,0.09V12h2V6.09z"
                        />
                      </svg>
                      Disconnect
                    </Button>
                  </div>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <button
            className="navbar-toggler p-0 border-0 menu-toggle order-3"
            type="button"
            onClick={() => {
              const sidebar = document.getElementById('mainsidemenu')
              if (sidebar) {
                if (sidebar.classList.contains('open')) {
                  sidebar.classList.remove('open')
                } else {
                  sidebar.classList.add('open')
                }
              }
            }}
          >
            <span className="fa fa-bars" />
          </button>
          <div className="order-0 col-lg-4 col-md-4 col-sm-12 col-12 mb-3 mb-md-0 d-flex align-items-center" />
        </div>
      </nav>
    </div>
  )
}

export default Header
