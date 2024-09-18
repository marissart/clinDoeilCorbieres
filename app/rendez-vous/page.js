"use client";
import styles from "./page.module.css";
import { Input, FormGroup, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../components/button";
import Header from "../components/header";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {

  const [contactState, setContactState] = useState({});
  const [valide1, setValide1] = useState(true);
  const [valide2, setValide2] = useState(true);
  const [valide3, setValide3] = useState(true)
  const [valide4, setValide4] = useState(true)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContactState((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };

  const rdvOptionDisplay = ['Achat lunettes', 'Examen de la vue + achat lunettes (examen offert)', 'Examen de la vue (30€)'].map((option, index) => (
    <p key={index} className={styles.option} onClick={() => setContactState((prevState) => ({
      ...prevState,
      rdvOption: option
    }))}>{option}</p>
  ));
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Row className={styles.banner}>
          <Col lg={{size : 4}} className={styles.form}>
          <Row>
            <Col lg={{size : 5}} >
            <FormGroup>
        <div className={styles.inputGroup} style={{margin : '0 0'}}>
          <Input
            invalid={!valide1}
            onChange={handleInputChange}
            value={contactState.nom}
            className={styles.input}
            placeholder=""
            type="text"
            style={{margin : '0 0'}}
            name='nom'
          />
          <label className={styles.label} >Nom</label>
        </div>
      </FormGroup>
            </Col>
          <Col lg={{size : 5, offset:2}} >
          <FormGroup>
        <div className={styles.inputGroup} style={{margin : '0 0'}}>
          <Input
            invalid={!valide2}
            onChange={handleInputChange}
            value={contactState.prenom}
            className={styles.input}
            placeholder=""
            type="text"
            name='prenom'
            style={{margin : '0 0'}}
          />
          <label className={styles.label}>Prénom</label>
        </div>
      </FormGroup>
          </Col>
          </Row>
          
      
      <FormGroup>
        <div className={styles.inputGroup}>
          <Input
            invalid={!valide3}
            onChange={(e) => {
              e.target.value = e.target.value.replace(/\D/g, '');
              handleInputChange(e);
            }}
            value={contactState.phone}
            className={styles.input}
            placeholder=""
            type="text"
            name='phone'
          />
          <label className={styles.label}>Numéro de téléphone</label>
         
        </div>

      </FormGroup>
      <FormGroup>
        <div className={styles.inputGroup}>
          <Input
            
            onChange={handleInputChange}
            value={contactState.mail}
            className={styles.input}
            placeholder=""
            type="email"
            name='mail'
          />
          <label className={styles.label}>Email</label>
        </div>

      </FormGroup>
      <p
            className={styles.select}
          > {!contactState.rdvOption ? "option" : contactState.rdvOption}
          </p>
          <div className={styles.dropdownContent} >
            {rdvOptionDisplay}
          </div>
          <Row className='endRow' style={{ padding: '0 10%', width:'95%', marginTop:"2rem" }}>
        <Col md={{ size: 5 }} lg={{ size: 4 }} xl={{ size: 3 }}>
          <div className='button'>
            <div  className='button-top transparent'>Valider</div>
          </div>
        </Col>
      </Row>
          </Col>
        </Row>
      
       
      </main>
    </div>
  );
}