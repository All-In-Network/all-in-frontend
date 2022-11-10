import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Sidebar(props) {
  const [isSidebarMini, setIsSidebarMini] = useState(false)
  const baseUrl = process.env.PUBLIC_URL

  const openChildren = id => {
    const otherTabs = document.getElementsByClassName('has-children')
    if (otherTabs) {
      for (let i = 0; i < otherTabs.length; i++) {
        if (otherTabs[i].id !== id) {
          otherTabs[i].className = otherTabs[i].className.replace(' show', '')
          if (otherTabs[i].parentElement.children.length > 1) {
            otherTabs[i].parentElement.children[0].setAttribute(
              'aria-expanded',
              'false'
            )
          }
        }
      }
    }
    const menutab = document.getElementById(id)
    if (menutab) {
      if (menutab.classList.contains('show')) {
        menutab.classList.remove('show')
        if (menutab.parentElement.children.length > 1) {
          menutab.parentElement.children[0].setAttribute(
            'aria-expanded',
            'false'
          )
        }
      } else {
        menutab.classList.add('show')
        if (menutab.parentElement.children.length > 1) {
          menutab.parentElement.children[0].setAttribute(
            'aria-expanded',
            'true'
          )
        }
      }
    }
  }
  const openChildren1 = id => {
    const otherTabs = document.getElementsByClassName('has-children')
    if (otherTabs) {
      for (let i = 0; i < otherTabs.length; i++) {
        otherTabs[i].className = otherTabs[i].className.replace(' show', '')
      }
    }
    const menutab = document.getElementById(id)
    if (menutab) {
      menutab.classList.add('show')
      if (menutab.parentElement.children.length > 1) {
        menutab.parentElement.children[0].setAttribute('aria-expanded', 'true')
      }
    }
  }

  const { activekey, menuData, GotoChangeMenu } = props

  return (
    <div
      id="mainsidemenu"
      className={`sidebar py-2 py-md-2 me-0 border-end ${
        isSidebarMini ? 'sidebar-mini' : ''
      }`}
    >
      <div className="d-flex flex-column h-100">
        <div className="pt-2 mb-0 brand-icon">
          <span className="logo-icon">
            <i className="fa fa-gg-circle fs-3" />
          </span>
          <span className="logo-text">All In Network</span>
        </div>
        <ul className="menu-list flex-grow-1 mt-4 px-1">
          {menuData.map((d, i) => {
            if (d.isToggled) {
              return (
                <li key={`shsdg${i}`}>
                  <Link
                    className="m-link"
                    to="#!"
                    onClick={e => {
                      e.preventDefault()
                      GotoChangeMenu(d.name)
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="24px"
                      height="24px"
                      viewBox={d.viewBox}
                    >
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d={d.iconClasss}
                        style={{ fill: 'var(--primary-color)' }}
                        data-st="fill:var(--chart-color4);"
                      />
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        className="st0"
                        d={d.iconClass}
                      />
                    </svg>
                    <div>
                      <h6 className="mb-0">{d.name}</h6>
                      <small className="text-muted">{d.subject}</small>
                    </div>
                  </Link>
                </li>
              )
            }
            if (d.children.length === 0) {
              return (
                <li key={`dsfshsdg${i}`} className=" collapsed">
                  <Link
                    to={`${baseUrl}/${d.routerLink[0]}`}
                    className={`m-link ${
                      `/${d.routerLink[0]}` === activekey ? 'active' : ''
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="24px"
                      height="24px"
                      viewBox={d.viewBox}
                    >
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d={d.iconClasss}
                        style={{ fill: 'var(--primary-color)' }}
                        data-st="fill:var(--chart-color4);"
                      />
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        className="st0"
                        d={d.iconClass}
                      />
                    </svg>
                    <div>
                      <h6 className="mb-0">{d.name}</h6>
                      <small className="text-muted">{d.subject}</small>
                    </div>
                  </Link>
                </li>
              )
            }
            return (
              <li key={`shsdg${i}`} className=" collapsed">
                <Link
                  to="#!"
                  className={`m-link ${
                    d.children.filter(
                      d => `${baseUrl}/${d.routerLink[0]}` === activekey
                    ).length > 0
                      ? 'active'
                      : ''
                  }`}
                  href="#!"
                  onClick={e => {
                    e.preventDefault()
                    openChildren(`menu-Pages${i}`)
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="24px"
                    height="24px"
                    viewBox={d.viewBox}
                  >
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      d={d.iconClasss}
                      style={{ fill: 'var(--primary-color)' }}
                      data-st="fill:var(--chart-color4);"
                    />
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      className="st0"
                      d={d.iconClass}
                    />
                  </svg>
                  <div>
                    <h6 className="mb-0">{d.name}</h6>
                    <small className="text-muted">{d.subject}</small>
                  </div>
                  <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
                </Link>

                {d.children.length > 0 ? (
                  <ul
                    className="sub-menu collapse has-children"
                    id={`menu-Pages${i}`}
                  >
                    {d.children.map((data, ind) => {
                      if (d.children.length > 0) {
                        if (activekey === `/${data.routerLink[0]}`) {
                          setTimeout(() => {
                            openChildren1(`menu-Pages${i}`)
                          }, 500)
                        }
                      }
                      return (
                        <li key={`jfdgj${ind}`}>
                          <Link
                            className={
                              activekey === `/${data.routerLink[0]}`
                                ? 'ms-link active'
                                : 'ms-link'
                            }
                            to={`${baseUrl}/${data.routerLink[0]}`}
                          >
                            <span>{data.name}</span>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                ) : null}
              </li>
            )
          })}
        </ul>
        <button
          type="button"
          className="btn btn-link sidebar-mini-btn text-muted"
          onClick={() => {
            setIsSidebarMini(!isSidebarMini)
          }}
        >
          <span className="ms-2">
            <i className="icofont-bubble-right" />
          </span>
        </button>
      </div>
    </div>
  )
}

export default Sidebar
