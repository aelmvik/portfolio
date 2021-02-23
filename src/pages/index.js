import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'


const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <h1>Hello there! <span role="img" aria-label="wave">👋</span></h1>
      <h2>I am a twenty-something music production student living in Finland</h2>
      <p>You can find me on <a href="https://www.instagram.com/antonelm_/" target="_blank" rel="noreferrer nofollow">Instagram</a> & <a href="https://twitter.com/antonelm_" target="_blank" rel="noreferrer nofollow">Twitter</a></p>
      <p>This is my <a href="mailto:antonelmvik@gmail.com" target="_blank" rel="noreferrer nofollow">email address</a> (feel free to write!)</p>
    </Layout>
  )
}

export default IndexPage