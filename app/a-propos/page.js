"use client";
import styles from "./page.module.css";
import { Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../components/button";
import Header from "../components/header";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {




  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.banner}>
          {/* <p className={styles.title}>Opticienne à Carrère</p> */}
        </div>
        <Row className={styles.mainRow}>
          <Col lg={{size:6}}>
          <Image src={'/etageres.jpg'} id={styles.etageres} className={styles.mainRowImage} height={20000} width={2000} />
          <Image src={'/lunettes.jpg'} id={styles.caisse} className={styles.mainRowImage} height={20000} width={2000} />
          </Col><Col lg={{size: 5 }} style={{textAlign:'justify'}}>
          <p className={styles.title}>Mon Histoire</p>
          <p>
            Moi c’est Marianne, diplômée opticienne après avoir fait mes études en alternance (BTS et
            licence), et neuf ans après mes premiers pas dans l’optique c’est aujourd’hui à mon tour de
            me lancer dans cette folle aventure et de créer mon propre magasin !
          </p>
          <p>
            Dans une atmosphère intimiste, je suis à votre écoute pour trouver LA lunette qui vous
            correspond grâce à mes conseils en visagisme et mon expertise technique.
          </p>
          </Col>
        </Row>
        <Row className={styles.lastRow}>
          <Col lg={{size :  4 }} className={styles.lastRowCol}>
          <Image src={'/magasin.jpg'}  className={styles.lastRowImage} height={20000} width={2000} />
          </Col>
          <Col lg={{size :  4 }} className={styles.lastRowCol} style={{alignItems:'center'}}>
          <Image src={'/lunettesCaisses.jpg'}  className={styles.lastRowImage} height={20000} width={2000} />
          </Col>
          <Col lg={{size :  4 }} className={styles.lastRowCol} style={{alignItems:'flex-end'}}>
          <Image src={'/test.jpg'}  className={styles.lastRowImage} height={20000} width={2000} />
          </Col>
        </Row>
      </main>
    </div>
  );
}