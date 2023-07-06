// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const AboutMe = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm Noah Zoarski, a Purdue University undergraduate in Cybersecurity with a passion for privacy and DIY.
      </p>
    </Layout>
  )
}

export const Head = () => <title>AboutMe</title>

// Step 3: Export your component
export default AboutMe
