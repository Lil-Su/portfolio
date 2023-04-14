import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {useRouter} from "next/router";
import styles from '../../styles/Navbar.module.css';
import Link from "next/link";
import enFlag from '../../public/Flag/flag-of-the-united-states.png';
import amFlag from '../../public/Flag/i.webp';
import ruFlag from '../../public/Flag/flag-of-russia.png';
const flagList = [enFlag,amFlag, ruFlag]
const FlagModal = ({toggle,close,getFlagImages}) => {
    const {locales,locale} = useRouter()
    const resultsConcat = locales.reduce((acc, current, index) => {
        return [...acc,{locales:current, flag:flagList[index].src}]
    },[]);
   useEffect(()=>{
       if(locale === 'am'){
           getFlagImages(amFlag.src)
       }else if(locale === 'ru'){
           getFlagImages(ruFlag.src)
       }else {
           getFlagImages(enFlag.src)
       }
   },[locale])
  const toggleActive = useMemo(()=>{
      return toggle ? styles.flag_modal_active: ''
  },[toggle])
    return (
        <div className={`${styles.flag_modal} ${toggleActive}`} >
            {
                resultsConcat.map((item,index)=>(
                    <div key={index}
                         className={styles.flag_item}
                         onClick={close}
                    >
                      <Link href={'/'} locale={item.locales}>
                          <img src={item.flag}/>
                      </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default FlagModal;
