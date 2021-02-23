import React from 'react'
import {  Link  } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import musicStyles from '../styles/music.module.scss'

const StuffPage = () => {
  return (
      <Layout>
        <Head title="Stuff"/>
        <h1>Stuff 🧰</h1>
        <h3>I have gathered quite a bit of stuff...</h3>

        <h3 className={musicStyles.titleBreak}>strings 🎸</h3>
        <p className={musicStyles.listItem}><Link to="https://www.lakland.com/product/skyline-series-44-60/" target="_blank">Lakland Skyline Series 44-60 (Vintage J)</Link></p>
        <p className={musicStyles.listItem}><Link to="https://www.thomann.de/gb/fender_70_classic_jazz_bass_pf_3ts.htm" target="_blank">Fender Jazz Bass MN</Link></p>
        <p className={musicStyles.listItem}><Link to="https://www.thomann.de/gb/fender_sq_bullet_tele_lrl_bsb.htm" target="_blank">Fender Squier Telecaster</Link></p>
        <p className={musicStyles.listItem}><Link to="https://www.wikizic.org/Landola-SD-11-CE/" target="_blank">Landola SD-11 CE</Link></p>
        <p className={musicStyles.listItem}><Link to="https://www.thomann.de/gb/yamaha_fx370c_bk.htm" target="_blank">Yamaha FX370C BL</Link></p>
        <p className={musicStyles.listItem}><Link to="https://www.thomann.de/gb/epiphone_mm30.htm" target="_blank">Epiphone MM-30</Link></p>
        <p className={musicStyles.listItem}><Link to="https://www.thomann.de/gb/harley_benton_kahuna_clu_bass_ukulele.htm" target="_blank">Harley Benton Kahuna CLU-Bass Ukulele</Link></p>

      <h3 className={musicStyles.titleBreak}>keys 🎹</h3>

        <p className={musicStyles.listItem}><Link to="http://www.fenderrhodes.com/pianos/mark1b.html" target="_blank">Fender Rhodes Mark I</Link></p>
        <p className={musicStyles.listItem}><Link to="http://www.vintagesynth.com/roland/d20.php" target="_blank">Roland D-20</Link></p>
        <p className={musicStyles.listItem}><Link to="https://www.korg.com/se/products/synthesizers/microkorg/" target="_blank">microKORG</Link></p>
        <p className={musicStyles.listItem}><Link to="https://www.youtube.com/watch?v=ZmoZ4vP4uKA" target="_blank">Yamaha Organ L-20</Link></p>
        <p className={musicStyles.listItem}><Link to="https://youtu.be/svX6WRWBP8o" target="_blank">Keyscape <span className={musicStyles.red}>(software)</span></Link></p>
        <p className={musicStyles.listItem}><Link to="https://collection.maas.museum/object/129021" target="_blank">Mannborg Reed Organ</Link></p>
        <p className={musicStyles.listItem}><Link to="https://www.youtube.com/watch?v=xAq1ZuDZeBA" target="_blank">Weinbach Grand Piano</Link></p>
        <p className={musicStyles.listItem}><Link to="https://www.youtube.com/watch?v=9Jki3__Eaes" target="_blank">Orla Companion L5A</Link></p>

      <h3 className={musicStyles.titleBreak}>misc 🤷‍♂️</h3>

        <p className={musicStyles.listItem}><Link to="http://www.markbass.it/product-detail/little-mark-800/" target="_blank">Little Mark 800</Link></p>
        <p className={musicStyles.listItem}><Link to="http://www.markbass.it/product-detail/standard-104hf/" target="_blank">Markbass 104HF</Link></p>
        <p className={musicStyles.listItem}><Link to="https://www.amazon.co.uk/Miditech-Mit-00140-Groove-Station-Keyboard/dp/B00GB0QQ42" target="_blank">Miditech Groove Station Keyboard</Link></p>
        <p className={musicStyles.listItem}><Link to="https://www.shure.com/en-GB/products/microphones/sm58" target="_blank">Shure SM58</Link></p>
        <p className={musicStyles.listItem}><Link to="https://www.thomann.de/gb/audio_technica_at2035.htm" target="_blank">Audio-Technica AT 2035</Link></p>

      <h3 className={musicStyles.titleBreak}>recording - mixing - video 📼</h3>

        <p className={musicStyles.listItem}><Link to="https://www.thomann.de/gb/yamaha_hs_7_stand_bundle.htm" target="_blank">Yamaha HS 7 monitors</Link></p>
        <p className={musicStyles.listItem}><Link to="https://www.m-audio.com/products/view/m-track-eight" target="_blank">M-Track Eight audio interface</Link></p>
        <p className={musicStyles.listItem}><Link to="https://www.esi-audio.com/products/m4uex/" target="_blank">ESI M4U eX midi interface</Link></p>
        <p className={musicStyles.listItem}><Link to="https://www.image-line.com/flstudio/" target="_blank">FL Studio Signature Edition</Link></p>
        <p className={musicStyles.listItem}><Link to="https://www.apple.com/logic-pro/" target="_blank">Logic Pro X</Link></p>
        <p className={musicStyles.listItem}><Link to="https://www.apple.com/final-cut-pro/" target="_blank">Final Cut Pro X</Link></p>
        <p className={musicStyles.listItem}><Link to="https://www.apple.com/iphone/" target="_blank">iPhone Xs (video)</Link></p>

      </Layout>
  )
}

export default StuffPage