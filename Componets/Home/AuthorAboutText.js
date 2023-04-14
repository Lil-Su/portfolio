import React, {useState} from 'react';
import {FormattedMessage} from "react-intl";
import styles from '../../styles/Home.module.css'
import ButtonContact from "@/Componets/ButtonContact";
const AuthorAboutText = ({openContactModal}) => {
    return (
        <div className={styles.author_text_block}>
            <h1><FormattedMessage id={"author.hi"}/></h1>
            <h2><FormattedMessage id={"author.name.surName"}/></h2>
            <ButtonContact open={openContactModal}/>
        </div>
    );
};

export default AuthorAboutText;
