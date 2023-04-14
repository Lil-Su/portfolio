import React, {useCallback, useMemo} from 'react';
import styles from '../../styles/resume.module.css'
import CloseModalButton from "@/Componets/CloseModalButton";
import {AiFillCloseSquare} from "react-icons/ai";
import {FormattedMessage} from "react-intl";

const ResumeModal = ({resumeModal,setResumeModal}) => {
    const close = useCallback(()=>{
        setResumeModal(false)
    },[]);
    const toggleModal = useMemo(()=>{
        return  resumeModal ? styles.active_modal:''
    },[resumeModal])
    return (
        <div className={`${styles.modal_block} ${toggleModal}`}>
            <div className={styles.resume_modal}>
                <span onClick={close} className={styles.close}><AiFillCloseSquare/></span>
                 <a
                     href={'Resume.pdf'}
                     target={'_blank'}
                     onClick={close}
                 >
                     <FormattedMessage id={"author.resume.view"}/>
                 </a>
                <a
                    href={'Resume.pdf'}
                    download={'Resume.pdf'}
                    onClick={close}
                >
                    <FormattedMessage id={"author.resume"}/>
                </a>
            </div>
        </div>
    );
};

export default ResumeModal;
