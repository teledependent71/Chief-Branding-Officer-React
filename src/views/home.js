import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Chief Branding Officer</title>
        <meta property="og:title" content="Chief Branding Officer" />
      </Helmet>
    </div>
  )
}

export default Home
