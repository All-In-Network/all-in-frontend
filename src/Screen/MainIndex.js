import React from 'react'
import { connect } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import {
  onModalOpen,
  onChangeDarkMode,
  onChangeHighcontrast,
  OnchangeRTLmode,
} from '../Redux/Actions/Actions'
import Header from '../Component/Comman/Header'
import Dashboard from './Dashboard/Dashboard'
import Market from './Market/Market'
import Traders from './Traders/Traders'

function MainIndex(props) {
  const { activekey, GotoChangeMenu } = props
  const baseUrl = process.env.PUBLIC_URL
  return (
    <div className="main px-lg-4 px-md-4">
      {activekey === '/chat' || activekey === '/documentation' ? (
        ''
      ) : (
        <Header
          onModalOpen={val => {
            props.onModalOpen(true)
          }}
          GotoChangeMenu={val => {
            GotoChangeMenu(val)
          }}
        />
      )}

      <div className="body d-flex py-3 ">
        <Routes>
          <Route exact path={`${baseUrl}/`} element={<Dashboard />} />
          <Route exact path={`${baseUrl}/dashboard`} element={<Dashboard />} />
          <Route exact path={`${baseUrl}/market`} element={<Market />} />
          <Route exact path={`${baseUrl}/traders`} element={<Traders />} />
        </Routes>
      </div>
    </div>
  )
}
const mapStateToProps = ({ Mainreducer }) => ({
  Mainreducer,
})
export default connect(mapStateToProps, {
  onModalOpen,
  onChangeDarkMode,
  onChangeHighcontrast,
  OnchangeRTLmode,
})(MainIndex)
