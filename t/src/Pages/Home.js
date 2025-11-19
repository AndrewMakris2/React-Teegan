import React from 'react'
import Quote from '../Components/quote.jsx'
import August from '../Components/august.jsx'
import September from '../Components/september.jsx'
import October from '../Components/october.jsx'
import November from '../Components/november.jsx'
import Quiz from '../Components/quiz.jsx'
import Video from '../Components/video.jsx'
import Recap from '../Components/recap.jsx'
import Footer from '../Components/footer.jsx'

const Home = () => {
  return (
    <div >
      <div className="home">
          <h2>🩷 Andrew & Teegan 🩷</h2>
          <Quote id="quote"/>
      </div>
        <div className='months' id='months'>
            <August/>
            <September/>
            <October/>
            <November/>
        </div>

      <div id='quiz'>
        <Quiz/>
      </div>

      <div id='video'>
        <Video/>
      </div>

      <div id='recap'>
        <Recap/>
      </div>

      <Footer/>
    </div>
  )
}

export default Home