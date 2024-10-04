"use client";
import styles from "./page.module.css";
import { Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../components/button";
import Header from "../components/header";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [show, setShow] = useState(false)
  console.log("🚀 ~ Home ~ show:", show)
  const [selected, setSelected] = useState(null)

  const marques = [{
    name: "Marant", link: '/marant.png', text: "La collection eyewear d'Isabel Marant s'associe à merveille avec sa ligne de prêt-à-porter puisqu'il s'agit ici d'incarner l'esthétique parisienne naturelle mais sophistiquée à travers une allure exigente mais sans arrogance. Être cool et confort à travers des modèles simples mais glamours.",
    image: [
      'https://krys-krys-storage.omn.proximis.com/Imagestorage/images/2000/1600/658aa0c7a6206_65859059160cc_03_v2.jpg',
    ]
  },
  {
    name: "GIGI", link: '/gigi.png', text: "Chez GIGI STUDIOS, la culture et l'exploration artistique vous offrent des lunettes uniques fabriquées à la main. Avec ses montures sobres ou colorées GIGI STUDIOS s'adapte au style unique de chacun.",
    image: ['https://gigistudios.com/cdn/shop/files/008_HOME_FW24_ICONS_COLECCTION_DESKTOP_6f31a07a-3b8b-4005-abf4-a9a5c1e9d118.jpg?crop=center&height=900&v=1724065061&width=1440',
      'https://gigistudios.com/cdn/shop/files/003_LANDING_FW24_ICONS_DESKTOP.jpg?crop=center&height=1800&v=1724072668&width=1440',
      'https://gigistudios.com/cdn/shop/files/009_HOME_FW24_LAB_COLECCTION_DESKTOP_3b5798ef-851a-49eb-8707-2726bcfe4944.jpg?crop=center&height=900&v=1724065103&width=1440',
      'https://gigistudios.com/cdn/shop/files/005_LANDING_FW24_LAB_DESKTOP.jpg?crop=center&height=2146&v=1724075551&width=1440',
      'https://gigistudios.com/cdn/shop/files/010_HOME_FW24_XS_COLECCTION_DESKTOP_591f36e2-a462-4513-a2e8-afb657ddb582.jpg?crop=center&height=900&v=1724065131&width=1440',
      'https://gigistudios.com/cdn/shop/files/006_LANDING_XS_MOBILE_19d48326-5a17-49db-8fb2-096a2cf505a8.jpg?crop=center&height=900&v=1724076732&width=1440']
  },
  {
    name: "Roussilhe", link: 'https://www.roussilhe.fr/img/1674230830.svg', text: "Installés au cœur du bassin d'Oyonnax, les Ateliers Roussilhe sont le lieu de création et de production de leurs collections en acétate. Design, prototype, découpe, incrustation de charnières, pose de rivets, polissage… toutes les étapes sont réalisées sur place. Les collections conservent la tradition d'un savoir-faire artisanal à la française.",
    image: ['https://www.roussilhe.fr/c/11-category_default/roussilhe-pop.jpg',
      'https://www.roussilhe.fr/c/13-category_default/roussilhe-popiz.jpg',
      // "https://www.roussilhe.fr/c/10-category_default/nos-collections.jpg"
    ]
  },
  {
    name: "Nude", link: '/nude.png', text: 'Et si les lunettes revenaient à un style élégant et épuré ? C’est le pari de la marque toulousaine Nude Eyewear. Des montures unisexes au design simple mais séduisant, qui proposent un nouveau regard sur la mode !',
    image: [
      'https://www.opticalfactory.fr/wp-content/uploads/2023/10/nude-eyewear-01.jpg',
      'https://www.opticalfactory.fr/wp-content/uploads/2023/10/nude-eyewear-03.jpg',
      // 'https://www.opticalfactory.fr/wp-content/uploads/2023/10/nude-eyewear-02.jpg0',
      'https://www.opticalfactory.fr/wp-content/uploads/2023/10/nude-eyewear-05.jpg',]
  },
  {
    name: "Dandy", link: '/dandy.png', text: "Les lunettes Dandy's sont rigoureusement fabriquées en Italie grâce à un savoir-faire unique. Nées en Italie dans les années 70 elles sauront satisaires les amateurs de montures entièrement faites à la main.",
    image: [
      'https://dandyseyewear.com/wp-content/uploads/2021/11/manifattura-occhiali-danys-eyewear.jpg',
      'https://dandyseyewear.com/wp-content/uploads/2024/07/foto-lookbook.jpg',
      'https://dandyseyewear.com/wp-content/uploads/2021/12/creazione-occhiali-artigianali-italy-n.jpg',
      'https://dandyseyewear.com/wp-content/uploads/2023/01/fabio.jpg',
    ]
  },
  {
    name: "Outspoken", link: '/outspoken.png', text: "Outspoken, une marque hollandaise de lunettes au style original et coloré.",
    image: ['https://www.frameworkeyewear.com/wp-content/uploads/sb-instagram-feed-images/330051184_3456563784671082_1298269637017549271_n.webpfull.jpg','https://www.frameworkeyewear.com/wp-content/uploads/2023/03/outspokenholland_LOOKBOOK014679-687x1030.jpg'],
  },
  {
    name: "Hugo Conti", link: '/conti.png', text: "HUGOCONTI est née avec une mission claire :  offrir style, qualité et prix compétitif, garantissant que la mode avant-gardiste soit à la portée de tous.",
    image: ['https://cdn.shopify.com/s/files/1/0831/2003/0022/files/Banner_1psd.jpg?v=1716675528',
      'https://domusoptica.pt/wp-content/uploads/2020/04/banner.jpg',
      'https://cdn.shopify.com/s/files/1/0831/2003/0022/files/Brand_Story_Image.jpg?v=1717711267',
    ]
  },
  {
    name: "Andy Brook", link: '/brook.png', text: "Andybrook est une jeune marque française fondée en 2017, qui propose des lunettes optiques et solaires tendances et originales.",
    image: [

      'https://andy-brook.com/fr/wp-content/uploads/2024/06/enfants-600x371.jpg.webp',
      'https://andy-brook.com/fr/wp-content/uploads/2024/06/shooting-Andy-Brook-840-scaled-e1702654312218.webp',
      'https://andy-brook.com/fr/wp-content/uploads/2024/06/shutterstock_1745870063-scaled-1-600x400.webp',

    ]
  }]

  const marquesDisplay = marques.map((m) => {
    let style
    if (selected !== null) {
      if (selected === m.name) {
        style = {
          top: " 10% ",
          left: "66% "
        }
      } else style = {
        display: "none"
      }
      console.log(style)
    }
    return (
      <Col onMouseEnter={() => setShow(true)} lg={{ size: 4 }} xs={{ size: (selected !== null) ? 9 : 6 }} className={`${styles.logoCol}  ${show ? styles.logoColShow : styles.nothing}`} style={style}>
        <Image
          onClick={() => (selected === null) ? setSelected(m.name) : setSelected(null)}
          height={600}
          width={600}
          className={styles.logos}
          src={m.link}
        />
      </Col>
    )
  })

  const textDisplay = marques.map((m) => {
    let style
    if (selected !== null) {
      if (selected === m.name) {
        style = {
          opacity: "1",
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }
      } else style = {

        display: 'none',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }

    }
    if (m.text) return (
      <Col lg={{ size: 6 }} className={styles.textCol} style={style} onClick={() => setSelected(null)}>
        <svg id="signupForm-arrow" onClick={() => setSelected(null)} style={{ cursor: 'pointer' }} className="w-6 h-6 d-none d-lg-flex" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
        </svg>
        <p style={{ width: "80%" }}>{m.text}</p>
      </Col>
    )
  })
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main} style={((selected === null)  ? {justifyContent:'center'} : {})}>
        <Row className={styles.logosRow} onMouseEnter={() => setShow(true)}>

          {marquesDisplay}
          {(selected !== null) && <Col xs={{ size: 1 }}>
            <svg id="signupForm-arrow" onClick={() => setSelected(null)} style={{ cursor: 'pointer' }} className="w-6 h-6 d-lg-none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
            </svg>
          </Col>}
          <Col onMouseEnter={() => setShow(true)} lg={{ size: 4 }} className={`${styles.logoCol} ${show ? styles.nothing : styles.n} d-none d-lg-flex`} >
            <Image
              onClick={() => (selected === null) ? setSelected("Dandy") : setSelected(null)}
              height={300}
              width={300}
              className={styles.logos}
              src={"https://andy-brook.com/wp-content/uploads/2024/06/adrian-c07-01.jpg"}
            />
          </Col>

          {(selected !== null) && textDisplay}

        </Row>
        <Row className={`${styles.imagesRow} d-none d-lg-flex`} style={(selected !== null) ? { bottom: '0' } : {}}  >
          {marques.map(m => {
            let style
            if (selected === m.name) {
              style = {
                opacity: '1'
              }
            } else style = {
              height: "0",
              width: "0"
            }
            return (m.image.map(i => {
              let number = 4
              let height
              if (m.name === "Outspoken" || m.name === "Dandy") number = 3
              if (m.name === "GIGI") number = 2
              if (m.name === "Roussilhe") number = 6
              if (m.name === "Hugo Conti" || m.name === "Andy Brook") number = 4
              // if (m.name ='Roussilhe') number = 3
              // if (m.name = 'Marant') number = 3
              return (
                <Col xs={{ size: number }} className={styles.imagesCol} style={style}>
                  <Image
                    height={300}
                    width={300}
                    className={styles.images}
                    src={i}
                  />
                </Col>
              )
            }))
          })}
        </Row>
      </main>
    </div>
  );
}