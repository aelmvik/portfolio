import React from 'react'
import {  Link  } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import musicStyles from '../styles/music.module.scss'

const MusicPage = () => {
  return (
      <Layout>
        <Head title="Music"/>
        <h1>Discography 💿</h1>
        <h3>Below are some things I’ve done in my life, in reverse chronological order:</h3>
        <h3>twenty twenty</h3>
        <div className={musicStyles.list}>
          <p className={musicStyles.listBreak}>played on, recorded and produced ⤵️</p>
          <p className={musicStyles.listItem}><Link to="https://youtu.be/2kpNabx7e-M" target="_blank">Because</Link></p>
          <p className={musicStyles.listItem}><Link to="https://youtu.be/FpoBF-lH8v8" target="_blank">Hey Bulldog</Link></p>
          <p className={musicStyles.listItem}><Link to="https://youtu.be/z_UFHhzXBvI" target="_blank">A Day In The Life</Link></p>
          <p className={musicStyles.listItem}><Link to="https://youtu.be/h80vx7bIbkI" target="_blank">Imagine</Link></p>
          <p className={musicStyles.listItem}><Link to="https://youtu.be/VDMs9BYGCHg" target="_blank">When I'm Sixty Four</Link></p>
          <p className={musicStyles.listItem}><Link to="https://youtu.be/sr9ZolJpddc" target="_blank">Strawberry Fields Forever</Link></p>
          <p className={musicStyles.listItem}><Link to="https://youtu.be/gQK8TEce6sg" target="_blank">While My Guitar Gently Weeps</Link></p>
          <p className={musicStyles.listBreak}>played on, co-recorded and co-produced ⤵️</p>
          <p className={musicStyles.listItem}><Link to="https://open.spotify.com/album/5lOUYxb27zodYDsBK3cl4i?si=UwvSMygLRuqMIiuv3QNfMw" target="_blank">Fruchtgetränk</Link></p>
          <p className={musicStyles.listItem}><Link to="https://youtu.be/P3h90-Cu0B8" target="_blank">Martha My Dear</Link></p>
          <p className={musicStyles.listBreak}>played on ⤵️</p>
          <p className={musicStyles.listItem}><Link to="https://youtu.be/11zV-VPs2lE" target="_blank">NoShow</Link></p>
        </div>
        <h3 className={musicStyles.titleBreak}>twenty nineteen</h3>
        <div className={musicStyles.list}>
          <p className={musicStyles.listBreak}>played on, recorded and produced ⤵️</p>
          <p className={musicStyles.listItem}><Link to="https://youtu.be/KuQJ6X5lk2U" target="_blank">Get Back</Link></p>
        </div>
        <h3 className={musicStyles.titleBreak}>twenty eighteen</h3>
        <div className={musicStyles.list}>
          <p className={musicStyles.listBreak}>played on, recorded and produced ⤵️</p>
          <p className={musicStyles.listItem}><Link to="https://youtu.be/zWFf4P0Psn4" target="_blank">a Beatles Tribute</Link></p>
          <p className={musicStyles.listBreak}>played on, co-recorded and co-produced ⤵️</p>
          <p className={musicStyles.listItem}><Link to="https://open.spotify.com/album/141mijXzFAWRapuHmlg8jA?si=dMtcN2qKSPGcxdK_-t0Qrw" target="_blank">Grand Slam Aces</Link></p>
          <p className={musicStyles.listItem}><Link to="https://open.spotify.com/album/1e9EFyw3foiFyKxW3uK0B1?si=z2wbdLf1SUCN2w4fmuhCww" target="_blank">Tip Tap Toe</Link></p>
          <p className={musicStyles.listBreak}>played Fender Rhodes on ⤵️</p>
          <p className={musicStyles.listItem}><Link to="https://open.spotify.com/album/44K9Tu0bDNXsAzXkKDoMJR?si=O9xfK3U7TmmrCTbwpp_Cng" target="_blank">The Narrow Line</Link></p>
        </div>
        <h3 className={musicStyles.titleBreak}>twenty seventeen</h3>
        <div className={musicStyles.list}>
          <p className={musicStyles.listBreak}>played on, co-recorded and co-produced ⤵️</p>
          <p className={musicStyles.listItem}><Link to="https://open.spotify.com/album/2XhZKOX6C5A8oJZv4sHXrd?si=pSF_I7VoSqGCFJvyaD5d3w" target="_blank">Mixtape Vol. 1</Link></p>
        </div>
        <h3 className={musicStyles.titleBreak}>twenty fourteen</h3>
        <div className={musicStyles.list}>
          <p className={musicStyles.listBreak}>played on ⤵️</p>
          <p className={musicStyles.listItem}><Link to="https://open.spotify.com/album/5LuGE2ECgFH8VkmbXKBgHy?si=d-ZY0d_DR0--gm855-3X8w" target="_blank">Road to Revolution</Link></p>
          <p className={musicStyles.listItem}><Link to="https://open.spotify.com/album/7j7F2CuRsNWoR7GdICliDk?si=eMlVBF7bT6qcQnLHdkrKdQ" target="_blank">Rebels</Link></p>
        </div>
      </Layout>
  )
}

export default MusicPage