import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  socials
} from './layout.module.css'
import LinkedInLogo from '../images/linkedin-original.svg'
import GithubLogo from '../images/github.svg'
import HTBLogo from '../images/hack-the-box.png'

const Socials = () => {
  return (
     <div className={socials}>
      <a href="https://www.linkedin.com/in/noah-zoarski" target="_blank" rel="noreferrer">
        <img src={LinkedInLogo} alt="LinkedIn"/>
      </a>
      <a href="https://github.com/ofnu" target="_blank" rel="noreferrer">
        <img src={GithubLogo} alt="GitHub"/>
      </a>
      <a href="https://app.hackthebox.com/profile/patagonia" target="_blank" rel="noreferrer">
        <img src={HTBLogo} alt="HackTheBox"/>
      </a>
    </div>
  )
}


const Sidebar = () => {
  return (
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
        flexDirection: "row",  // changes direction to row
      }}>
        <div>
          <Socials />
          <Sidebar />
        </div>
        <div style={{}}>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </div>
      </div>
    </div>
  )
}



export default Layout
