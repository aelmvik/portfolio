import React from 'react'
import {  Link  } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const NotFound = () => {
    return (
        <Layout>
            <Head title="404"/>
            <h1>Oopsie! Page not found. <span role="img" aria-label="man">🤷‍♂️</span></h1>
            <p><Link to="/">Come back!</Link></p>
        </Layout>
    )
}

export default NotFound