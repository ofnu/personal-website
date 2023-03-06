import React from 'react'
import ReactDOM from 'react-dom/client'
import MyTerminal from '../components/terminal'
import Layout from '../components/layout'
import Aboutme from './aboutme.js'

const IndexPage = () => {
  return (
    <Layout pageTitle="noahzoarski.net">
      <p1>Noah Zoarski - Purdue University Undergraduate - Cybersecurity Major</p1>
      <MyTerminal/>
      <script>MyTerminal.inputText.focus();</script>
    </Layout>
  )
}

export const Head = () => <title>Noah Zoarski</title>

export default IndexPage
