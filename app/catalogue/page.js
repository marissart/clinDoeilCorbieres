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
    name: "Marant", link: '/marant.png',
    image: ['https://gigistudios.com/cdn/shop/files/008_HOME_FW24_ICONS_COLECCTION_DESKTOP_6f31a07a-3b8b-4005-abf4-a9a5c1e9d118.jpg?crop=center&height=900&v=1724065061&width=1440',
      'https://gigistudios.com/cdn/shop/files/003_LANDING_FW24_ICONS_DESKTOP.jpg?crop=center&height=1800&v=1724072668&width=1440',
      'https://gigistudios.com/cdn/shop/files/009_HOME_FW24_LAB_COLECCTION_DESKTOP_3b5798ef-851a-49eb-8707-2726bcfe4944.jpg?crop=center&height=900&v=1724065103&width=1440',
      'https://gigistudios.com/cdn/shop/files/005_LANDING_FW24_LAB_DESKTOP.jpg?crop=center&height=2146&v=1724075551&width=1440',
      'https://gigistudios.com/cdn/shop/files/010_HOME_FW24_XS_COLECCTION_DESKTOP_591f36e2-a462-4513-a2e8-afb657ddb582.jpg?crop=center&height=900&v=1724065131&width=1440',
      'https://gigistudios.com/cdn/shop/files/006_LANDING_XS_MOBILE_19d48326-5a17-49db-8fb2-096a2cf505a8.jpg?crop=center&height=900&v=1724076732&width=1440']
    },
  {
    name: "GIGI", link: '/gigi.png',
    image: ['https://gigistudios.com/cdn/shop/files/008_HOME_FW24_ICONS_COLECCTION_DESKTOP_6f31a07a-3b8b-4005-abf4-a9a5c1e9d118.jpg?crop=center&height=900&v=1724065061&width=1440',
      'https://gigistudios.com/cdn/shop/files/003_LANDING_FW24_ICONS_DESKTOP.jpg?crop=center&height=1800&v=1724072668&width=1440',
      'https://gigistudios.com/cdn/shop/files/009_HOME_FW24_LAB_COLECCTION_DESKTOP_3b5798ef-851a-49eb-8707-2726bcfe4944.jpg?crop=center&height=900&v=1724065103&width=1440',
      'https://gigistudios.com/cdn/shop/files/005_LANDING_FW24_LAB_DESKTOP.jpg?crop=center&height=2146&v=1724075551&width=1440',
      'https://gigistudios.com/cdn/shop/files/010_HOME_FW24_XS_COLECCTION_DESKTOP_591f36e2-a462-4513-a2e8-afb657ddb582.jpg?crop=center&height=900&v=1724065131&width=1440',
      'https://gigistudios.com/cdn/shop/files/006_LANDING_XS_MOBILE_19d48326-5a17-49db-8fb2-096a2cf505a8.jpg?crop=center&height=900&v=1724076732&width=1440']
    },
  {
    name: "Roussilhe", link: 'https://www.roussilhe.fr/img/1674230830.svg',
    image: ['https://gigistudios.com/cdn/shop/files/008_HOME_FW24_ICONS_COLECCTION_DESKTOP_6f31a07a-3b8b-4005-abf4-a9a5c1e9d118.jpg?crop=center&height=900&v=1724065061&width=1440',
      'https://gigistudios.com/cdn/shop/files/003_LANDING_FW24_ICONS_DESKTOP.jpg?crop=center&height=1800&v=1724072668&width=1440',
      'https://gigistudios.com/cdn/shop/files/009_HOME_FW24_LAB_COLECCTION_DESKTOP_3b5798ef-851a-49eb-8707-2726bcfe4944.jpg?crop=center&height=900&v=1724065103&width=1440',
      'https://gigistudios.com/cdn/shop/files/005_LANDING_FW24_LAB_DESKTOP.jpg?crop=center&height=2146&v=1724075551&width=1440',
      'https://gigistudios.com/cdn/shop/files/010_HOME_FW24_XS_COLECCTION_DESKTOP_591f36e2-a462-4513-a2e8-afb657ddb582.jpg?crop=center&height=900&v=1724065131&width=1440',
      'https://gigistudios.com/cdn/shop/files/006_LANDING_XS_MOBILE_19d48326-5a17-49db-8fb2-096a2cf505a8.jpg?crop=center&height=900&v=1724076732&width=1440']
    },
  {
    name: "Nude", link: '/nude.png',
    image: ['https://gigistudios.com/cdn/shop/files/008_HOME_FW24_ICONS_COLECCTION_DESKTOP_6f31a07a-3b8b-4005-abf4-a9a5c1e9d118.jpg?crop=center&height=900&v=1724065061&width=1440',
      'https://gigistudios.com/cdn/shop/files/003_LANDING_FW24_ICONS_DESKTOP.jpg?crop=center&height=1800&v=1724072668&width=1440',
      'https://gigistudios.com/cdn/shop/files/009_HOME_FW24_LAB_COLECCTION_DESKTOP_3b5798ef-851a-49eb-8707-2726bcfe4944.jpg?crop=center&height=900&v=1724065103&width=1440',
      'https://gigistudios.com/cdn/shop/files/005_LANDING_FW24_LAB_DESKTOP.jpg?crop=center&height=2146&v=1724075551&width=1440',
      'https://gigistudios.com/cdn/shop/files/010_HOME_FW24_XS_COLECCTION_DESKTOP_591f36e2-a462-4513-a2e8-afb657ddb582.jpg?crop=center&height=900&v=1724065131&width=1440',
      'https://gigistudios.com/cdn/shop/files/006_LANDING_XS_MOBILE_19d48326-5a17-49db-8fb2-096a2cf505a8.jpg?crop=center&height=900&v=1724076732&width=1440']
    },
  {
    name: "Dandy's", link: '/dandy.png',
    image: ['https://gigistudios.com/cdn/shop/files/008_HOME_FW24_ICONS_COLECCTION_DESKTOP_6f31a07a-3b8b-4005-abf4-a9a5c1e9d118.jpg?crop=center&height=900&v=1724065061&width=1440',
      'https://gigistudios.com/cdn/shop/files/003_LANDING_FW24_ICONS_DESKTOP.jpg?crop=center&height=1800&v=1724072668&width=1440',
      'https://gigistudios.com/cdn/shop/files/009_HOME_FW24_LAB_COLECCTION_DESKTOP_3b5798ef-851a-49eb-8707-2726bcfe4944.jpg?crop=center&height=900&v=1724065103&width=1440',
      'https://gigistudios.com/cdn/shop/files/005_LANDING_FW24_LAB_DESKTOP.jpg?crop=center&height=2146&v=1724075551&width=1440',
      'https://gigistudios.com/cdn/shop/files/010_HOME_FW24_XS_COLECCTION_DESKTOP_591f36e2-a462-4513-a2e8-afb657ddb582.jpg?crop=center&height=900&v=1724065131&width=1440',
      'https://gigistudios.com/cdn/shop/files/006_LANDING_XS_MOBILE_19d48326-5a17-49db-8fb2-096a2cf505a8.jpg?crop=center&height=900&v=1724076732&width=1440']
    },
  {
    name: "Outspoken", link: '/outspoken.png',
    image: ['https://gigistudios.com/cdn/shop/files/008_HOME_FW24_ICONS_COLECCTION_DESKTOP_6f31a07a-3b8b-4005-abf4-a9a5c1e9d118.jpg?crop=center&height=900&v=1724065061&width=1440',
      'https://gigistudios.com/cdn/shop/files/003_LANDING_FW24_ICONS_DESKTOP.jpg?crop=center&height=1800&v=1724072668&width=1440',
      'https://gigistudios.com/cdn/shop/files/009_HOME_FW24_LAB_COLECCTION_DESKTOP_3b5798ef-851a-49eb-8707-2726bcfe4944.jpg?crop=center&height=900&v=1724065103&width=1440',
      'https://gigistudios.com/cdn/shop/files/005_LANDING_FW24_LAB_DESKTOP.jpg?crop=center&height=2146&v=1724075551&width=1440',
      'https://gigistudios.com/cdn/shop/files/010_HOME_FW24_XS_COLECCTION_DESKTOP_591f36e2-a462-4513-a2e8-afb657ddb582.jpg?crop=center&height=900&v=1724065131&width=1440',
      'https://gigistudios.com/cdn/shop/files/006_LANDING_XS_MOBILE_19d48326-5a17-49db-8fb2-096a2cf505a8.jpg?crop=center&height=900&v=1724076732&width=1440']
    },
  {
    name: "Hugo Conti", link: '/conti.png',
    image: ['https://gigistudios.com/cdn/shop/files/008_HOME_FW24_ICONS_COLECCTION_DESKTOP_6f31a07a-3b8b-4005-abf4-a9a5c1e9d118.jpg?crop=center&height=900&v=1724065061&width=1440',
      'https://gigistudios.com/cdn/shop/files/003_LANDING_FW24_ICONS_DESKTOP.jpg?crop=center&height=1800&v=1724072668&width=1440',
      'https://gigistudios.com/cdn/shop/files/009_HOME_FW24_LAB_COLECCTION_DESKTOP_3b5798ef-851a-49eb-8707-2726bcfe4944.jpg?crop=center&height=900&v=1724065103&width=1440',
      'https://gigistudios.com/cdn/shop/files/005_LANDING_FW24_LAB_DESKTOP.jpg?crop=center&height=2146&v=1724075551&width=1440',
      'https://gigistudios.com/cdn/shop/files/010_HOME_FW24_XS_COLECCTION_DESKTOP_591f36e2-a462-4513-a2e8-afb657ddb582.jpg?crop=center&height=900&v=1724065131&width=1440',
      'https://gigistudios.com/cdn/shop/files/006_LANDING_XS_MOBILE_19d48326-5a17-49db-8fb2-096a2cf505a8.jpg?crop=center&height=900&v=1724076732&width=1440']
    },
  {
    name: "Andy Brook", link: '/brook.png',
    image: ['https://gigistudios.com/cdn/shop/files/008_HOME_FW24_ICONS_COLECCTION_DESKTOP_6f31a07a-3b8b-4005-abf4-a9a5c1e9d118.jpg?crop=center&height=900&v=1724065061&width=1440',
      'https://gigistudios.com/cdn/shop/files/003_LANDING_FW24_ICONS_DESKTOP.jpg?crop=center&height=1800&v=1724072668&width=1440',
      'https://gigistudios.com/cdn/shop/files/009_HOME_FW24_LAB_COLECCTION_DESKTOP_3b5798ef-851a-49eb-8707-2726bcfe4944.jpg?crop=center&height=900&v=1724065103&width=1440',
      'https://gigistudios.com/cdn/shop/files/005_LANDING_FW24_LAB_DESKTOP.jpg?crop=center&height=2146&v=1724075551&width=1440',
      'https://gigistudios.com/cdn/shop/files/010_HOME_FW24_XS_COLECCTION_DESKTOP_591f36e2-a462-4513-a2e8-afb657ddb582.jpg?crop=center&height=900&v=1724065131&width=1440',
      'https://gigistudios.com/cdn/shop/files/006_LANDING_XS_MOBILE_19d48326-5a17-49db-8fb2-096a2cf505a8.jpg?crop=center&height=900&v=1724076732&width=1440']
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
      <Col onMouseEnter={() => setShow(true)} lg={{ size: 4 }} className={`${styles.logoCol} ${show ? styles.logoColShow : styles.nothing}`} style={style}>
        <Image
          onClick={() => setSelected(m.name)}
          height={300}
          width={300}
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
        }
      }

    }
    return (
      <Col lg={{ size: 5 }} className={styles.textCol} style={style}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
      </Col>
    )
  })
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Row className={styles.logosRow}  onMouseEnter={() => setShow(true)}>

          {marquesDisplay}
          <Col onMouseEnter={() => setShow(true)} lg={{ size: 4 }} className={`${styles.logoCol} ${show ? styles.nothing : styles.n}`} >
        <Image
          onClick={() => setSelected(m.name)}
          height={300}
          width={300}
          className={styles.logos}
          src={"https://andy-brook.com/wp-content/uploads/2024/06/adrian-c07-01.jpg"}
        />
      </Col>
          {textDisplay}
        </Row>
        <Row className={styles.imagesRow} style={(selected !== null) ? {bottom:'0'} : {}} >
          {marques.map(m => {
            let style
            if (selected === m.name) {
              style = {
                opacity: '1'
              }
            } else style = {
             height: "0"
            }
            return (m.image.map(i => (
              <Col lg={{ size: 2 }} className={styles.imagesCol} style={style}>
                <Image
                  height={300}
                  width={300}
                  className={styles.images}
                  src={i}
                />
              </Col>
            )))
          })}
        </Row>
      </main>
    </div>
  );
}