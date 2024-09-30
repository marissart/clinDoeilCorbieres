// "use client";
import styles from './styles/header.module.css'
import UseAnimations from "react-useanimations";
import facebook from 'react-useanimations/lib/facebook'
import instagram from "react-useanimations/lib/instagram";
import linkedin from "react-useanimations/lib/linkedin";
import menu2 from "react-useanimations/lib/menu2"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons"

import { useState } from 'react';
import Image from 'next/image';
export default function Header(props) {
    const [show, setShow] = useState(false)
    return (
        <div>
            <div id={styles.container} >
                <div id={styles.logoDiv}>
                    {/* <img src='./logo.png' id={styles.logo}/> */}
                    <a href='/' style={{ textDecoration: "none", color: 'black' }}><Image id={styles.logo} width={160} height={160} src='/favicon.png' /></a>
                </div>
                <div id={styles.buttonsDiv}>
                    <div className={styles.buttonDiv}> <a href="/" style={{ textDecoration: "none", color: '#fdfffc' }}><span className={styles.button}>Accueil</span></a><span className={styles.buttonSpan}></span></div>
                    <div className={styles.buttonDiv}>  <a href="/catalogue" style={{ textDecoration: "none", color: '#fdfffc' }}><span className={styles.button}>Catalogue</span></a><span className={styles.buttonSpan}></span></div>
                    <div className={styles.buttonDiv}>  <a href="/rendez-vous" style={{ textDecoration: "none", color: '#fdfffc' }}><span className={styles.button}>Rendez-vous</span></a><span className={styles.buttonSpan}></span></div>
                    <div className={styles.buttonDiv}>  <a href="/a-propos" style={{ textDecoration: "none", color: '#fdfffc' }}><span className={styles.button}>A Propos</span></a><span className={styles.buttonSpan}></span></div>
                </div>
                <div id={styles.iconDiv}>
                    <p className={styles.telephone}>04 11 66 95 10</p>
                    <FontAwesomeIcon icon={faFacebook} className={`${styles.icon} d-lg-flex d-none`} />
                    <FontAwesomeIcon icon={faInstagram} className={`${styles.icon} d-lg-flex d-none`} />
                    {/* <UseAnimations animation={linkedin} size={35} className={styles.icon} /> */}
                    <FontAwesomeIcon icon={faBars}  className={styles.icon} id={styles.menu} onClick={() => setShow(!show)} />
                </div>
            </div>
           { show && <div id={styles.menuDiv}>
           <a href="/" style={{ textDecoration: "none", color: '#fdfffc' }}><p className={styles.menuOption}>Accueil</p></a>
                <a href="/catalogue" style={{ textDecoration: "none", color: '#fdfffc' }}><p className={styles.menuOption}>Catalogue</p></a>
                <a href="/rendez-vous" style={{ textDecoration: "none", color: '#fdfffc' }}><p className={styles.menuOption}>Rendez-vous</p></a>
                <a href="/a-propos" style={{ textDecoration: "none", color: '#fdfffc' }}><p className={styles.menuOption}>A propos</p></a>
            </div>}
        </div>
    )
}
