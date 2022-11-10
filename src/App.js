/* eslint-disable no-shadow */
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Sidebar from './Component/Comman/Sidebar'
import MainIndex from './Screen/MainIndex'
import AuthIndex from './Screen/AuthIndex'
import menu from './Component/Data/Menu/Menu.json'

function App() {
  const [menuData, setMenuData] = useState([...menu.menu])
  const navigate = useNavigate()
  const baseUrl = process.env.PUBLIC_URL
  const activekey = () => {
    let res = window.location.pathname
    let baseUrl = process.env.PUBLIC_URL
    baseUrl = baseUrl.split('/')
    res = res.split('/')
    res = res.length > 0 ? res[baseUrl.length] : '/'
    res = res ? `/${res}` : '/'
    const activeKey1 = res
    return activeKey1
  }
  if (
    activekey() === '/connect' ||
    activekey() === '/register' ||
    activekey() === '/404page'
  ) {
    return (
      <div id="cryptoon-layout" className="theme-indigo">
        <AuthIndex />
      </div>
    )
  }
  const GotoChangeMenu = () => {
    navigate(`${baseUrl}/`)
    setMenuData([...menu.menu])
  }

  // console.log(activekey())
  return (
    <div id="cryptoon-layout" className="theme-indigo">
      <Sidebar
        activekey={activekey()}
        menuData={menuData}
        GotoChangeMenu={val => {
          GotoChangeMenu(val)
        }}
      />
      <MainIndex
        activekey={activekey()}
        GotoChangeMenu={val => {
          GotoChangeMenu(val)
        }}
      />
    </div>
  )
}
const mapStateToProps = ({ Mainreducer }) => ({
  Mainreducer,
})

export default connect(mapStateToProps, {})(App)
