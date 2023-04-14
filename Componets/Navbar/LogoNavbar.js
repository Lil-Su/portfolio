import React from 'react';
import styles from '../../styles/Navbar.module.css'
const LogoNavbar = () => {
   const  text = 'Portfolio';
   const splitText = text.split('')
    return (
        <div className={styles.logo_navbar}>
            <div className={styles.name_logo}>
                <h2>H.</h2>
                <h2>G.</h2>
            </div>
            <div className={styles.logo_text_block}>
                {
                    splitText.map((item,index)=>{
                        return <span key={index} className={styles.anim_text_item}>{item}</span>
                    })
                }
            </div>
        </div>
    );
};

export default LogoNavbar;
