import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'
import musicStyles from '../styles/music.module.scss'

const MusicPage = () => {
  return (
      <Layout>
        <Head title="Music"/>
        <h1>Discography <span role="img" aria-label="disc">💿</span></h1>
        <h2>Below are some things I’ve done</h2>
        <h3>twenty twentyone</h3>
        <div className={musicStyles.list}>
          <p className={musicStyles.listBreak}>played on, recorded and produced <span role="img" aria-label="arrow">⤵️</span></p>
          <p className={musicStyles.listItem}><a href="https://youtu.be/kh8VvWwssCE" target="_blank" rel="noreferrer nofollow">Lady Madonna</a></p>
        </div>
        <h3 className={musicStyles.titleBreak}>twenty twenty</h3>
        <div className={musicStyles.list}>
          <p className={musicStyles.listBreak}>played on, recorded and produced <span role="img" aria-label="arrow">⤵️</span></p>
          <p className={musicStyles.listItem}><a href="https://youtu.be/2kpNabx7e-M" target="_blank" rel="noreferrer nofollow">Because</a></p>
          <p className={musicStyles.listItem}><a href="https://youtu.be/FpoBF-lH8v8" target="_blank" rel="noreferrer nofollow">Hey Bulldog</a></p>
          <p className={musicStyles.listItem}><a href="https://youtu.be/z_UFHhzXBvI" target="_blank" rel="noreferrer nofollow">A Day In The Life</a></p>
          <p className={musicStyles.listItem}><a href="https://youtu.be/h80vx7bIbkI" target="_blank" rel="noreferrer nofollow">Imagine</a></p>
          <p className={musicStyles.listItem}><a href="https://youtu.be/VDMs9BYGCHg" target="_blank" rel="noreferrer nofollow">When I'm Sixty Four</a></p>
          <p className={musicStyles.listItem}><a href="https://youtu.be/sr9ZolJpddc" target="_blank" rel="noreferrer nofollow">Strawberry Fields Forever</a></p>
          <p className={musicStyles.listItem}><a href="https://youtu.be/gQK8TEce6sg" target="_blank" rel="noreferrer nofollow">While My Guitar Gently Weeps</a></p>
          <p className={musicStyles.listBreak}>played on, co-recorded and co-produced <span role="img" aria-label="arrow">⤵️</span></p>
          <p className={musicStyles.listItem}><a href="https://open.spotify.com/album/5lOUYxb27zodYDsBK3cl4i?si=UwvSMygLRuqMIiuv3QNfMw" target="_blank" rel="noreferrer nofollow">Fruchtgetränk</a></p>
          <p className={musicStyles.listItem}><a href="https://youtu.be/P3h90-Cu0B8" target="_blank" rel="noreferrer nofollow">Martha My Dear</a></p>
          <p className={musicStyles.listBreak}>played on <span role="img" aria-label="arrow">⤵️</span></p>
          <p className={musicStyles.listItem}><a href="https://youtu.be/11zV-VPs2lE" target="_blank" rel="noreferrer nofollow">NoShow</a></p>
        </div>
        <h3 className={musicStyles.titleBreak}>twenty nineteen</h3>
        <div className={musicStyles.list}>
          <p className={musicStyles.listBreak}>played on, recorded and produced <span role="img" aria-label="arrow">⤵️</span></p>
          <p className={musicStyles.listItem}><a href="https://youtu.be/KuQJ6X5lk2U" target="_blank" rel="noreferrer nofollow">Get Back</a></p>
        </div>
        <h3 className={musicStyles.titleBreak}>twenty eighteen</h3>
        <div className={musicStyles.list}>
          <p className={musicStyles.listBreak}>played on, recorded and produced <span role="img" aria-label="arrow">⤵️</span></p>
          <p className={musicStyles.listItem}><a href="https://youtu.be/zWFf4P0Psn4" target="_blank" rel="noreferrer nofollow">a Beatles Tribute</a></p>
          <p className={musicStyles.listBreak}>played on, co-recorded and co-produced <span role="img" aria-label="arrow">⤵️</span></p>
          <p className={musicStyles.listItem}><a href="https://open.spotify.com/album/141mijXzFAWRapuHmlg8jA?si=dMtcN2qKSPGcxdK_-t0Qrw" target="_blank" rel="noreferrer nofollow">Grand Slam Aces</a></p>
          <p className={musicStyles.listItem}><a href="https://open.spotify.com/album/1e9EFyw3foiFyKxW3uK0B1?si=z2wbdLf1SUCN2w4fmuhCww" target="_blank" rel="noreferrer nofollow">Tip Tap Toe</a></p>
          <p className={musicStyles.listBreak}>played Fender Rhodes on <span role="img" aria-label="arrow">⤵️</span></p>
          <p className={musicStyles.listItem}><a href="https://open.spotify.com/album/44K9Tu0bDNXsAzXkKDoMJR?si=O9xfK3U7TmmrCTbwpp_Cng" target="_blank" rel="noreferrer nofollow">The Narrow Line</a></p>
        </div>
        <h3 className={musicStyles.titleBreak}>twenty seventeen</h3>
        <div className={musicStyles.list}>
          <p className={musicStyles.listBreak}>played on, co-recorded and co-produced <span role="img" aria-label="arrow">⤵️</span></p>
          <p className={musicStyles.listItem}><a href="https://open.spotify.com/album/2XhZKOX6C5A8oJZv4sHXrd?si=pSF_I7VoSqGCFJvyaD5d3w" target="_blank" rel="noreferrer nofollow">Mixtape Vol. 1</a></p>
        </div>
        <h3 className={musicStyles.titleBreak}>twenty fourteen</h3>
        <div className={musicStyles.list}>
          <p className={musicStyles.listBreak}>played on <span role="img" aria-label="arrow">⤵️</span></p>
          <p className={musicStyles.listItem}><a href="https://open.spotify.com/album/5LuGE2ECgFH8VkmbXKBgHy?si=d-ZY0d_DR0--gm855-3X8w" target="_blank" rel="noreferrer nofollow">Road to Revolution</a></p>
          <p className={musicStyles.listItem}><a href="https://open.spotify.com/album/7j7F2CuRsNWoR7GdICliDk?si=eMlVBF7bT6qcQnLHdkrKdQ" target="_blank" rel="noreferrer nofollow">Rebels</a></p>
        </div>
      </Layout>
  )
}

export default MusicPage