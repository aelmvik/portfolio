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
        <h2>Grab a coffee <span role="img" aria-label="coffee">☕️</span></h2>
        <p>
        As I was saying — I am a twenty-something Mr. living in Finland (and sometimes Sweden). 
        So far, my life has revolved around plucking strings and making sounds in different ways, 
        as well as studying… a lot.
        </p>
        <p>
        I am currently studying music production at <a href="https://www.du.se/sv/Utbildning/Program/ljud-och-musikproduktionsprogrammet/" target="_blank" rel="noreferrer nofollow">Dalarna University</a> 🧑‍🎓, 
        but my previous studies include a Bachelor of Arts in musicology 
        from <a href="https://www.abo.fi/en/study-subject/musicology/" target="_blank" rel="noreferrer nofollow">Åbo Akademi University</a> and a degree in information technology 
        from <a href="https://www.turkuai.fi/sv/abo-yrkesinstitut/sok-till-oss/enheten-handel-och-data/informations-och-kommunikationsteknik" target="_blank" rel="noreferrer nofollow">Turku Vocational Institute</a>. 
        You can read my <a href="https://drive.google.com/file/d/1hAkzrKLrs4IxmIaBek-hO1pOc4UW2_qT/preview" target="_blank" rel="noreferrer nofollow">bachelor's thesis</a> right here if you happen to read Swedish.
        </p>
        <p>
        When I’m not studying I like to gig around with my <a href="https://www.facebook.com/shesleavinghome2017/" target="_blank" rel="noreferrer nofollow">Beatles tribute 
        band</a> or my straight-up-clean-cut <a href="https://www.facebook.com/unclebenspumpedupfrisco/" target="_blank" rel="noreferrer nofollow">funk band</a>. Either that or make some more <Link to="/music">sounds</Link>.
        </p>
        <h4>Other (maybe) interesting facts:</h4>
        <ol>
          <li>
            <p>I listen to music and maintain a pretty funky <a href="https://open.spotify.com/user/anton_elmvik?si=a_RutWxrTAu66l9XUqsmKQ" target="_blank" rel="noreferrer nofollow">collection</a></p>
          </li>
          <li>
            <p>I like watching youtube videos about anything and everything</p>
          </li>
          <li>
            <p>I frequently am the bandleader for <a href="http://www.teaterboulage.fi/pa-gang" target="_blank" rel="noreferrer nofollow">Teaterboulage</a></p>
          </li>
          <li>
            <p>I sometimes make <a href="https://www.instagram.com/antonelm_/" target="_blank" rel="noreferrer nofollow">videos</a> on the internet</p>
          </li>
          <li>
            <p>I co-produce music as <a href="https://open.spotify.com/artist/7q0wl2DKE7xHZpJyQO2wPV?si=59n22on_Q0CurN35eWkQeA" target="_blank" rel="noreferrer nofollow">Glem Aces</a></p>
          </li>
          <li>
            <p>I built this very site using <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer nofollow">Gatsby</a> and the <a href="https://github.com/aelmvik/portfolio" target="_blank" rel="noreferrer nofollow">source code</a> is available here</p>
          </li>
        </ol>
        <img className={aboutStyles.image} src="https://lh3.googleusercontent.com/wuUxUzV37S1c7pCpOMsse64rpycFRmM9izDSegHfuFvYxcojrV-97ajkae_IO5HA_IxYMi0zaKPXJC-3nbjviKDnjuFKcxn3cOTQOlPBCA__8iQfuPOHQ3RH0mG7G31E-vscv0RQLx4=w2400" alt="anton-portfolio"></img>

      </Layout>
  )
}

export default AboutPage