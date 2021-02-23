import React from 'react'
import {  Link  } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import indexStyles from '../styles/index.module.scss'


const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <h1>Hello there! 👋</h1>
      <h2>I am a twenty-something music production student living in Finland</h2>
      <p>You can find me on <Link to="https://www.instagram.com/antonelm_/" target="_blank">Instagram</Link> & <Link to="https://twitter.com/antonelm_" target="_blank">Twitter</Link></p>
      <p>This is my <a href="mailto:antonelmvik@gmail.com" target="_blank">email address</a> (feel free to write!)</p>
    </Layout>
  )
}

export default IndexPage