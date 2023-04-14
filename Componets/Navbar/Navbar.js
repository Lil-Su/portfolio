import React, {useCallback, useEffect, useMemo, useState} from 'react';
import styles from '../../styles/Navbar.module.css';
import Link from "next/link";
import {FormattedMessage} from "react-intl";
import FlagModal from "@/Componets/Navbar/FlagModal";
import LogoNavbar from "@/Componets/Navbar/LogoNavbar";
import {AiOutlineMenu,AiFillCloseSquare} from "react-icons/ai";
const navItems = [
    {path:'/' ,formatId:"nav.item.home"},
    {path:'/About' ,formatId:"nav.item.about"},
    {path:'/Project' ,formatId:"nav.item.project"},
]
const Navbar = () => {
    const [activeFlagModal, setActiveFlagModal] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeFlagImages, setActiveFlagImages] = useState(null)
    const [activeNavbar, setActiveNavbar] = useState(false)
    const toggleNavbar  =useMemo(()=>{
        return activeNavbar ? styles.active_navbar :''
    },[activeNavbar]);
    const editActiveIndex = useCallback((index)=>{
        setActiveIndex(index)
    },[activeIndex])
   const openModalFlag = useCallback(()=>{
        setActiveFlagModal(!activeFlagModal)
   },[activeFlagModal]);
    const closeModalFlag = useCallback(()=>{
        setActiveFlagModal(false)
    },[activeFlagModal]);
    console.log(activeNavbar)
    return (
        <nav className={styles.Navbar}>
         <LogoNavbar/>
            <ul className={`${styles.nav_block} ${toggleNavbar}`}>
                {navItems &&
                    navItems.map((item, index) => (
                        <li key={index}
                            className={index === activeIndex
                                ?`${styles.nav_item} ${styles.activeItem}`
                                :`${styles.nav_item} ${styles.nav_item_hover}`}
                        >
                            <Link href={item.path}
                                onClick={()=>editActiveIndex(index)}
                            >
                                <FormattedMessage id={item.formatId}/>
                            </Link>
                        </li>
                    ))
                }
                    <div className={styles.flag} onClick={openModalFlag}>
                        <img src={activeFlagImages}
                             alt={activeFlagImages}
                             className={styles.flag_img}/>
                    </div>
                    <FlagModal
                        toggle={activeFlagModal}
                        close={closeModalFlag}
                        getFlagImages={setActiveFlagImages}
                    />
            </ul>
            <div
                className={styles.menu_icon}
                onClick={() => setActiveNavbar(!activeNavbar)}
            >
                {
                    activeNavbar ? <AiFillCloseSquare/>
                                 :  <AiOutlineMenu/>
                }
            </div>
        </nav>
    );
};

export default Navbar;
