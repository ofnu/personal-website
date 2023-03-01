// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const AboutMe = () => {
  return (
    <Layout pageTitle="Experience">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export const Head = () => <title>AboutMe</title>

// Step 3: Export your component
export default AboutMe
