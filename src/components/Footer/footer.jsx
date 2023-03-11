import  styles from "./Footer.module.css";
import {SlSocialFacebook, SlSocialInstagram, SlSocialInstagram} from "react-icons/sl";
import { useNavigate } from "react-router-dom";



const Footer = (props) => {
  return (
    <footer className={styles.footer}>
       
        <h2 className={styles.name}> About the shop</h2>
        < SlSocialFacebook size={40} className={styles.icon}/> <SlSocialInstagram size={40} className={styles.icon}/> <SlSocialInstagram size={40} className={styles.icon}/>
        <p className={styles.item}>Privace Policy </p>
        <p className={styles.item}>Return Policy </p>
        <p className={styles.item}>Term of Service </p>
        <p className={styles.item}>FAQ </p>
            
    </footer>
  );
};

export default Footer;