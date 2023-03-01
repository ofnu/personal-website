import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

const Sidebar = () => {
  return (
    // <div style={{ width: "400px",
    // paddingTop: "140px",
    // display: "fixed",
    // flexDirection: "column",
    // justifyContent: "left",
    // alignItems: "center"}}>
     <div className={navLinks}>
      <Link to="/">Home</Link>
      <Link to="/aboutme">About</Link>
      <Link to="/experience">Experience</Link>
    </div>
  )
}

const Layout = ({ pageTitle, children }) => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center"
    }}>
      <div style={{
        display: "flex",
      }}>
        <Sidebar />
        <div style={{}}>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
