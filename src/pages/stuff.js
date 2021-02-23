import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'
import musicStyles from '../styles/music.module.scss'

const StuffPage = () => {
  return (
      <Layout>
        <Head title="Stuff"/>
        <h1>Stuff <span role="img" aria-label="toolbox">🧰</span></h1>
        <h3>I have gathered quite a bit of stuff...</h3>

        <h3 className={musicStyles.titleBreak}>strings <span role="img" aria-label="guitar">🎸</span></h3>
        <p className={musicStyles.listItem}><a href="https://www.lakland.com/product/skyline-series-44-60/" target="_blank" rel="noreferrer nofollow">Lakland Skyline Series 44-60 (Vintage J)</a></p>
        <p className={musicStyles.listItem}><a href="https://www.thomann.de/gb/fender_70_classic_jazz_bass_pf_3ts.htm" target="_blank" rel="noreferrer nofollow">Fender Jazz Bass MN</a></p>
        <p className={musicStyles.listItem}><a href="https://www.thomann.de/gb/fender_sq_bullet_tele_lrl_bsb.htm" target="_blank" rel="noreferrer nofollow">Fender Squier Telecaster</a></p>
        <p className={musicStyles.listItem}><a href="https://www.wikizic.org/Landola-SD-11-CE/" target="_blank" rel="noreferrer nofollow">Landola SD-11 CE</a></p>
        <p className={musicStyles.listItem}><a href="https://www.thomann.de/gb/yamaha_fx370c_bk.htm" target="_blank" rel="noreferrer nofollow">Yamaha FX370C BL</a></p>
        <p className={musicStyles.listItem}><a href="https://www.thomann.de/gb/epiphone_mm30.htm" target="_blank" rel="noreferrer nofollow">Epiphone MM-30</a></p>
        <p className={musicStyles.listItem}><a href="https://www.thomann.de/gb/harley_benton_kahuna_clu_bass_ukulele.htm" target="_blank" rel="noreferrer nofollow">Harley Benton Kahuna CLU-Bass Ukulele</a></p>

      <h3 className={musicStyles.titleBreak}>keys <span role="img" aria-label="keys">🎹</span></h3>

        <p className={musicStyles.listItem}><a href="http://www.fenderrhodes.com/pianos/mark1b.html" target="_blank" rel="noreferrer nofollow">Fender Rhodes Mark I</a></p>
        <p className={musicStyles.listItem}><a href="http://www.vintagesynth.com/roland/d20.php" target="_blank" rel="noreferrer nofollow">Roland D-20</a></p>
        <p className={musicStyles.listItem}><a href="https://www.korg.com/se/products/synthesizers/microkorg/" target="_blank" rel="noreferrer nofollow">microKORG</a></p>
        <p className={musicStyles.listItem}><a href="https://www.youtube.com/watch?v=ZmoZ4vP4uKA" target="_blank" rel="noreferrer nofollow">Yamaha Organ L-20</a></p>
        <p className={musicStyles.listItem}><a href="https://youtu.be/svX6WRWBP8o" target="_blank" rel="noreferrer nofollow">Keyscape <span className={musicStyles.red}>(software)</span></a></p>
        <p className={musicStyles.listItem}><a href="https://collection.maas.museum/object/129021" target="_blank" rel="noreferrer nofollow">Mannborg Reed Organ</a></p>
        <p className={musicStyles.listItem}><a href="https://www.youtube.com/watch?v=xAq1ZuDZeBA" target="_blank" rel="noreferrer nofollow">Weinbach Grand Piano</a></p>
        <p className={musicStyles.listItem}><a href="https://www.youtube.com/watch?v=9Jki3__Eaes" target="_blank" rel="noreferrer nofollow">Orla Companion L5A</a></p>

      <h3 className={musicStyles.titleBreak}>misc <span role="img" aria-label="man">🤷‍♂️</span></h3>

        <p className={musicStyles.listItem}><a href="http://www.markbass.it/product-detail/little-mark-800/" target="_blank" rel="noreferrer nofollow">Little Mark 800</a></p>
        <p className={musicStyles.listItem}><a href="http://www.markbass.it/product-detail/standard-104hf/" target="_blank" rel="noreferrer nofollow">Markbass 104HF</a></p>
        <p className={musicStyles.listItem}><a href="https://www.amazon.co.uk/Miditech-Mit-00140-Groove-Station-Keyboard/dp/B00GB0QQ42" target="_blank" rel="noreferrer nofollow">Miditech Groove Station Keyboard</a></p>
        <p className={musicStyles.listItem}><a href="https://www.shure.com/en-GB/products/microphones/sm58" target="_blank" rel="noreferrer nofollow">Shure SM58</a></p>
        <p className={musicStyles.listItem}><a href="https://www.thomann.de/gb/audio_technica_at2035.htm" target="_blank" rel="noreferrer nofollow">Audio-Technica AT 2035</a></p>

      <h3 className={musicStyles.titleBreak}>recording - mixing - video <span role="img" aria-label="cassette">📼</span></h3>

        <p className={musicStyles.listItem}><a href="https://www.thomann.de/gb/yamaha_hs_7_stand_bundle.htm" target="_blank" rel="noreferrer nofollow">Yamaha HS 7 monitors</a></p>
        <p className={musicStyles.listItem}><a href="https://www.m-audio.com/products/view/m-track-eight" target="_blank" rel="noreferrer nofollow">M-Track Eight audio interface</a></p>
        <p className={musicStyles.listItem}><a href="https://www.esi-audio.com/products/m4uex/" target="_blank" rel="noreferrer nofollow">ESI M4U eX midi interface</a></p>
        <p className={musicStyles.listItem}><a href="https://www.image-line.com/flstudio/" target="_blank" rel="noreferrer nofollow">FL Studio Signature Edition</a></p>
        <p className={musicStyles.listItem}><a href="https://www.apple.com/logic-pro/" target="_blank" rel="noreferrer nofollow">Logic Pro X</a></p>
        <p className={musicStyles.listItem}><a href="https://www.apple.com/final-cut-pro/" target="_blank" rel="noreferrer nofollow">Final Cut Pro X</a></p>
        <p className={musicStyles.listItem}><a href="https://www.apple.com/iphone/" target="_blank" rel="noreferrer nofollow">iPhone Xs (video)</a></p>

      </Layout>
  )
}

export default StuffPage