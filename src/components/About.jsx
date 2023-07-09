import React from 'react'
import { Link ,Routes, Route} from 'react-router-dom'
import AboutInfo from './AboutInfo'
import AboutSetting from './AboutSetting'

function About() {
  return (
    <div>
            <h1>About Page</h1>
            <ul>
                <li><Link to="info">About Info</Link></li>
                <li><Link to="settings">About Settings</Link></li>
            </ul>      

            <Routes>
                <Route path="info" element={<AboutInfo />} />
                <Route path="settings" element={<AboutSetting />} />
            </Routes>
    </div>
  )
}

export default About