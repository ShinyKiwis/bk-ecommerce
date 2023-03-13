 import React from 'react';
 import  styles from "./Footer.module.css";
 import {SlSocialFacebook, SlSocialInstagram, SlSocialTwitter} from "react-icons/sl";
 import { useNavigate } from "react-router-dom";




function Footer() {
  const navigate=useNavigate();
  return (
    <footer className={styles.footer}>
       
        <h2 className={styles.name}> About the shop</h2>
        <SlSocialFacebook size={40} className={styles.icon}/> <SlSocialInstagram size={40} className={styles.icon}/> <SlSocialTwitter size={40} className={styles.icon}/>
        <li className={styles.item}>Privace Policy </li>
        <li className={styles.item}>Return Policy </li>
        <li className={styles.item}>Term of Service </li>
        <li className={styles.item}>FAQ </li>
            
    </footer>
  );
};

export default Footer;
