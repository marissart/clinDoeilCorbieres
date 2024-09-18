"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./components/button";
import Header from "./components/header";
import { useEffect, useState } from "react";
import { Star } from "@material-ui/icons";
export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  console.log("🚀 ~ Home ~ selectedIndex:", selectedIndex)
  const images = [
    '/reparation.webp',
    '/lunette.webp',
    '/lentilles.webp',
    '/test.webp'
  ];

  const handleImageClick = (index) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  const avis = [
    { name: 'Manon F.', avis: 'Une très jolie boutique avec un choix important de lunettes. Marianne est très douce et l’écoute de nos envies. Ma fille de 7 ans adore ses nouvelles paires de lunettes.', note: 5 },
    { name: 'Ambre A.', avis: 'Un magnifique magasin, Marianne a su me conseiller au mieux pour le choix de mes lunettes ! Elle est très à l’écoute, souriante et compétente. Je recommande vivement !', note: 5 },
    { name: 'Julie L.', avis: 'Très jolie boutique, avec un large choix Marianne est de très bons conseils, douce et patiente avec les enfants. Ma fille de 2 ans ne quitte plus ses nouvelles lunettes !', note: 5 }
  ];

  useEffect(() => {
    const images = document.querySelectorAll(`.${styles.image}`);

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
          entry.target.classList.remove(styles.hidden);  // Enlève la classe d'animation inverse si elle est présente
        } else {
          entry.target.classList.remove(styles.visible);
          entry.target.classList.add(styles.hidden);  // Ajoute l'animation inverse quand l'élément sort du viewport
        }
      });
    }, { threshold: 0.01 });

    images.forEach(image => {
      observer.observe(image);
    });

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [styles.image, styles.visible, styles.hidden]);

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <Row className={styles.bannerDiv}>
          <Col lg={{ size: 5, offset: 0 }} style={{ width: 'fit-content' }}>
            <Button text='Prendre rendez-vous' />
          </Col>
        </Row>
        <Row className={styles.Row}>
          <div className={styles.browCircle}></div>
          <p className={styles.subtitle}>Nos Services</p>

          {(selectedIndex !== null) &&
            <Row className={styles.imageSection} ><Col xs={{ size: 6, offset: 0 }} lg={{ size: 4, offset: 0 }}>
              <p className={styles.visible}>Lorem psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </Col>
              {images.map((src, index) => {
                if (selectedIndex === index) return (
                  <Col key={index} xs={{ size: 6, offset: 0 }} lg={{ size: 2, offset: 0 }} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Image
                      src={src}
                      width={200}
                      height={200}
                      className={`${styles.image} ${selectedIndex !== null && selectedIndex !== index ? styles.hidden : styles.right} `}
                      alt={`Service ${index + 1}`}
                      onClick={() => handleImageClick(index)}
                    />
                  </Col>
                )
              })}
            </Row>
          }
          {(selectedIndex === null) && <Row className={styles.imageSection} >
            {images.map((src, index) => (
              <Col key={index} xs={{ size: 6, offset: 0 }} lg={{ size: 2, offset: 0 }} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <Image
                  src={src}
                  width={200}
                  height={200}
                  className={`${styles.image} ${selectedIndex !== null && selectedIndex !== index ? styles.hidden : styles.right} `}
                  alt={`Service ${index + 1}`}
                  onClick={() => handleImageClick(index)}
                />
              </Col>
            ))}
          </Row>}
        </Row>
        <Row className={`${styles.Row} ${styles.contact} `}>
          <Col xs={{ size: 6 }} lg={{ size: 3, offset: 0 }} className={styles.contactCard}>
            <p className={styles.contactCardName}>Le clin d'oeil des Corbières</p>
            <p className={styles.contactCardInfo}>04 11 66 95 10</p>
            <p className={styles.contactCardInfo}>7 Av. de Louate</p>

            <p className={styles.contactCardInfo}>11100</p>

            <p className={styles.contactCardDay}>Mardi au Vendredi :</p>

              <p className={styles.contactCardInfo}>8h30 - 18h30</p>

              <p className={styles.contactCardInfo}>14h30 - 19h00</p>

              <p className={styles.contactCardDay}>Samedi :</p>
              <p className={styles.contactCardInfo}> 9h30 - 13h00</p></Col>
        </Row>

        <Row className={`${styles.Row} `} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <p className={styles.subtitle}>Nos Avis</p>
          <div className={styles.lightCircle}></div>
          <Row className={styles.avisSection}>
            {avis.map((avis, index) => {
              const stars = []
              for (let i = 0; i < 5; i++) {
                let style = { 'cursor': 'pointer' };
                if (i < avis.note) {
                  style = { 'color': '#FABD03' };
                }
                stars.push(<Star key={i} style={style} />);
              }
              return (
                <Col key={index} xs={{ size: 9, offset: 0 }} lg={{ size: 3, offset: 0 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className={styles.avisCard}>
                    <p className={styles.note}>{avis.note}/5 {stars}</p>

                    <p className={styles.avis}>{avis.avis}</p>
                    <p className={styles.avisName}>{avis.name}</p>
                  </div>
                </Col>
              )
            })}
          </Row>
        </Row>
        <Row className={`${styles.Row} ${styles.bas} `}>

        </Row>
      </main>
    </div>
  );
}