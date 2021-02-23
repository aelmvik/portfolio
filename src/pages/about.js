import React from 'react'
import {  Link  } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import aboutStyles from '../styles/about.module.scss'

const AboutPage = () => {
  return (
      <Layout>
        <Head title="About"/>
        <h1>You want the <i>long</i> story?</h1>
        <h2>Grab a coffee ☕️</h2>
        <p>
        As I was saying — I am a twenty-something Mr. living in Finland (and sometimes Sweden). 
        So far, my life has revolved around plucking strings and making sounds in different ways, 
        as well as studying… a lot.
        </p>
        <p>
        I am currently studying music production at <Link to="https://www.du.se/sv/Utbildning/Program/ljud-och-musikproduktionsprogrammet/" target="_blank">Dalarna University</Link> 🧑‍🎓, 
        but my previous studies include a Bachelor of Arts in musicology 
        from <Link to="https://www.abo.fi/en/study-subject/musicology/" target="_blank">Åbo Akademi University</Link> and a degree in information technology 
        from <Link to="https://www.turkuai.fi/sv/abo-yrkesinstitut/sok-till-oss/enheten-handel-och-data/informations-och-kommunikationsteknik" target="_blank">Turku Vocational Institute</Link>. 
        You can read my <Link to="https://drive.google.com/file/d/1hAkzrKLrs4IxmIaBek-hO1pOc4UW2_qT/preview" target="_blank">bachelor's thesis</Link> right here if you happen to read Swedish.
        </p>
        <p>
        When I’m not studying I like to gig around with my <Link to="https://www.facebook.com/shesleavinghome2017/" target="_blank">Beatles tribute 
        band</Link> or my straight-up-clean-cut <Link to="https://www.facebook.com/unclebenspumpedupfrisco/" target="_blank">funk band</Link>. Either that or make some more <Link to="/music">sounds</Link>.
        </p>
        <h4>Other (maybe) interesting facts:</h4>
        <ol>
          <li>
            <p>I listen to music and maintain a pretty funky <Link to="https://open.spotify.com/user/anton_elmvik?si=a_RutWxrTAu66l9XUqsmKQ" target="_blank">collection</Link></p>
          </li>
          <li>
            <p>I like watching youtube videos about anything and everything</p>
          </li>
          <li>
            <p>I frequently am the bandleader for <Link to="http://www.teaterboulage.fi/pa-gang" target="_blank">Teaterboulage</Link></p>
          </li>
          <li>
            <p>I sometimes make <Link to="https://www.instagram.com/antonelm_/" target="_blank">videos</Link> on the internet</p>
          </li>
          <li>
            <p>I co-produce music as <Link to="https://open.spotify.com/artist/7q0wl2DKE7xHZpJyQO2wPV?si=59n22on_Q0CurN35eWkQeA" target="_blank">Glem Aces</Link></p>
          </li>
        </ol>
        <img className={aboutStyles.image} src="https://lh3.googleusercontent.com/wuUxUzV37S1c7pCpOMsse64rpycFRmM9izDSegHfuFvYxcojrV-97ajkae_IO5HA_IxYMi0zaKPXJC-3nbjviKDnjuFKcxn3cOTQOlPBCA__8iQfuPOHQ3RH0mG7G31E-vscv0RQLx4=w2400" alt="anton-portfolio"></img>

      </Layout>
  )
}

export default AboutPage