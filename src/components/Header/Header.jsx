import React from 'react';
import  styles from "./Header.module.css";
import {AiOutlineSlack} from "react-icons/ai";
import { useNavigate } from "react-router-dom";


function Header() {
  const navigate=useNavigate();
  return (
    <header className={styles.header}>
        <AiOutlineSlack   onClick={() => navigate('/Signup')} size={60} className={styles.item} />
        <h2 className={styles.name}> My company</h2>
            
    </header>
  );
};

export default Header;