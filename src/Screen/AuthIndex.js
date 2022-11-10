import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { connect } from 'react-redux'
import { onModalOpen } from '../Redux/Actions/Actions'
import AuthHeader from '../Component/Comman/AuthHeader'
import ConnectWallet from '../Component/Auth/ConnectWallet'
import RegisterSoulbound from '../Component/Auth/Register'

function AuthIndex(props) {
  const baseUrl = process.env.PUBLIC_URL
  return (
    <div className="main p-2 py-3 p-xl-5">
      <AuthHeader
        onModalOpen={() => {
          // eslint-disable-next-line react/destructuring-assignment
          props.onModalOpen(true)
        }}
      />
      <Routes>
        <Route exact path={`${baseUrl}/connect`} element={<ConnectWallet />} />
        <Route
          exact
          path={`${baseUrl}/register`}
          element={<RegisterSoulbound />}
        />
      </Routes>
    </div>
  )
}

const mapStateToProps = ({ Mainreducer }) => ({
  Mainreducer,
})

export default connect(mapStateToProps, {
  onModalOpen,
})(AuthIndex)
