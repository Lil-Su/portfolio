import React, {useCallback, useMemo, useState} from 'react';
import styles from '../../styles/concat.module.css';
import CloseModalButton from "@/Componets/CloseModalButton";
import {AiFillCloseSquare} from "react-icons/ai";
import ContactIcons from "@/Componets/icons/ContactIcons";

const ContactModal = ({closeModalContactBtn, toggleClass, setResumeModal}) => {
    const [toggleIcon, setToggleIcon] = useState(false);
    const [telToggle, setTelToggle] = useState(false);
    const toggleModal = useMemo(() => {
        return toggleClass ? styles.active_modal : ''
    }, [toggleClass]);
    const openResumeModal = useCallback(() => {
        setResumeModal(true)
        setToggleIcon(false)
        setTelToggle(false)
        closeModalContactBtn(false)
    }, [])
    return (
        <div className={`${styles.contact_modal_block} ${toggleModal}`}>
            <div className={styles.modal}>

                    <CloseModalButton
                        values={<AiFillCloseSquare/>}
                        close={closeModalContactBtn}
                        styles={styles.close_icons}
                        removeIconClass={setToggleIcon}
                        removeTelClass={setTelToggle}
                    />
                    <ContactIcons
                        classIcons={toggleClass}
                        setToggleIcon={setToggleIcon}
                        toggleIcon={toggleIcon}
                        telToggle={telToggle}
                        setTelToggle={setTelToggle}
                    />
                <button
                    onClick={openResumeModal}
                    className={styles.resume_btn}>
                    Resume
                </button>
            </div>
        </div>
    );
};

export default ContactModal;
