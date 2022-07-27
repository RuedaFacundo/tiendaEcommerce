import React from 'react'
import Header from './Header'
import Footer from './Footer'
import CenteredTabs from './CenteredTabs'

const Layout = (props) => {
  const {children} = props
  return (
    <>
      <Header></Header>
      <CenteredTabs></CenteredTabs>
      {children}
      <Footer></Footer>
    </>
  )
}

export default Layout
