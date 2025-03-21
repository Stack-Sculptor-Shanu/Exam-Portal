import React from 'react'
import Footer from '../footer/Footer'
import Landingpage from '../LandingPage/Landingpage'
import LiveExams from '../Examination/LiveExams/LiveExams'

const Home = () => {
  return (
    <div>
        <Landingpage/>
        {/* <LiveExams/> */}
        <Footer/>
    </div>
  )
}

export default Home