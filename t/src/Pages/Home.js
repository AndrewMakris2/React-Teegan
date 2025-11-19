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
import Month from '../Components/months.jsx'
import Kiss from '../Music/Kiss.mp3'

const Home = () => {
  return (
    <div >
      <button className="music-btn" onClick={() => document.getElementById("bg-music").play()}>
        🎵
      </button>

      <audio id="bg-music" src={Kiss} loop></audio>


      <div className="home">
          <h2>🩷 Andrew & Teegan 🩷</h2>
          <Quote id="quote"/>
      </div>
        <div className='months' id='months'>
            <Month/>
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