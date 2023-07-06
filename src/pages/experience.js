// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import TextBox from '../components/TextBox'

// Step 2: Define your component
const Experience = () => {
  return (
    <Layout pageTitle="Experience">
      <div className="about-me-page">
          <TextBox
            title="Bio"
            content="With a strong foundation in Cybersecurity and computer science, I've had diverse experiences in IT support, sales, and student leadership. My passion for cybersecurity is backed by my education and skills in Scrum & Agile Methodologies, Cisco Networking, Unix, MacOS, Microsoft Windows Active Directory, and much more."
            fontSize={24} // Adjust the font size as needed
          />
          <TextBox
            title="Education"
            content="Purdue University - Bachelor of Science, Cybersecurity (August 2020 - December 2024)
            Baltimore Cyber Range - After-school certification bootcamp exploring CompTIA A+, Security+, Network+ concepts (December 2019 - January 2020)
            Baltimore Polytechnic Institute - Computer Science Track and Independent Study (Graduated 2020)"
            fontSize={20} // Adjust the font size as needed
          />
          <TextBox
            title="Skills and Softwares"
            content="Scrum & Agile Methodologies, Cisco Networking, Unix, MacOS, Microsoft Windows Active Directory, Unified Markup Language (UML), Python, Java, SQL, mySQL, Wireshark, Nmap, Metasploit, linpeas Foundations of C, JavaScript, React BlueCat, ARS IdentityOne, Sassafras Asset Manager, IT Tickets"
            fontSize={18} // Adjust the font size as needed
          />
          <TextBox
            title="Achievements"
            content="Publication in Purdue Cornerstone Liberal Arts Journal, Issue 2, Fall 2021, see Writer's Statement, page 25 - A simple lesson for teaching Cybersecurity Best Practices
            Japanese National Honor Society (inducted 2018)"
            fontSize={16} // Adjust the font size as needed
          />
          <TextBox
            title="Work Experience"
            content="Purdue College of Agriculture, I.T. - Student Support (2022 - present)
            Sunglass City, Ocean City, MD - Sales Specialist (Summer 2020)"
            fontSize={16} // Adjust the font size as needed
          />
          <TextBox
            title="Extra-Curriculars"
            content="Purdue “Skulls” Phi Kappa Sigma - Telecommunication Chairman (December 2020 - December 2021)
            Purdue “Skulls” Phi Kappa Sigma - Kitchen Liaison (December 2020 - August 2020)"
            fontSize={16} // Adjust the font size as needed
          />
          <TextBox
            title="Contact"
            content="nzoarski@purdue.edu | (410) 600-5254
            Website: [http://noahzoarski.net](http://noahzoarski.net)
            LinkedIn: [https://linkedin.com/in/noah-zoarski](https://linkedin.com/in/noah-zoarski)"
            fontSize={16} // Adjust the font size as needed
          />
      </div>
    </Layout>
  )
}

// Step 3: Export your component
export default Experience
