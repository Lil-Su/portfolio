import React, {useEffect, useMemo} from 'react';
import {FaFacebook} from "react-icons/fa";
import {AiFillInstagram, AiFillGithub} from "react-icons/ai";
import styles from './style.module.css'

const ContactIcons = ({classIcons, toggleIcon, setToggleIcon, setTelToggle, telToggle}) => {
    const tel = '098101130';
    const tolSplit = tel.split('')
    useEffect(() => {
        setTimeout(() => {
            if (classIcons) {
                setToggleIcon(true)
            }
        }, 1500)
    }, [classIcons]);
    useEffect(() => {
        if (toggleIcon) {
            setTimeout(() => {
                setTelToggle(true)
            }, 2000)
        }
    }, [telToggle, toggleIcon]);
    const activeIconClass = useMemo(() => {
        return toggleIcon ? styles.active_modal_icons : ''
    }, [toggleIcon]);
    const activeTelClass = useMemo(() => {
        return toggleIcon ? styles.tel_active_class : ''
    }, [telToggle])
    return (
        <div className={`${styles.icons_contact_modal} ${activeIconClass}`}>
           <div className={styles.icons_block}>
                   <span className={styles.icons}>
                <a href="https://www.facebook.com/ho.vo.10297" target={"_blank"}><FaFacebook/></a>
            </span>
               <span className={styles.icons}>
                <a href="https://instagram.com/hovo_99___?igshid=ZDdkNTZiNTM="
                   target={"_blank"}><AiFillInstagram/></a>
            </span>
               <span className={styles.icons}>
                <a href="https://github.com/hovogalstyan" target={"_blank"}><AiFillGithub/></a>
            </span>
           </div>
            <div className={styles.tel}>
                <a href={"tel:+37898101130"}>
                    {
                        tolSplit.map((item, index) => (
                            <span className={`${styles.icons_items} ${activeTelClass}`} key={index}>{item}</span>
                        ))
                    }
                </a>
            </div>
        </div>
    );
};

export default ContactIcons;
