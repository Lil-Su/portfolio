import React, {useCallback} from 'react';
import {FormattedMessage} from "react-intl";
import styles from  '../styles/Home.module.css';
const ButtonContact = ({open}) => {
    const openModal = useCallback(()=>{
        open(true)
    },[])
    return (
         <button className={styles.contact_btn} onClick={openModal}>
             <FormattedMessage id={"author.contact"}/>
         </button>
    );
};

export default ButtonContact;
