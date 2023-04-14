import React, {useState} from "react";
import AuthorPhoto from "@/Componets/Home/AuthorPhoto";


import styles from '@/styles/Home.module.css'
import AuthorAboutText from "@/Componets/Home/AuthorAboutText";
import ContactModal from "@/Componets/ContactModal/ContactModal";
import ResumeModal from "@/Componets/ResumeModal/ResumeModal";

export default function Home() {
    const [activeContactModal, setActiveContactModal] = useState(false)
    const [resumeModal, setResumeModal] = useState(false)
    return (
        <div className={styles.Home}>
            <AuthorAboutText
                openContactModal={setActiveContactModal}
            />
            <AuthorPhoto/>
            <ContactModal
                closeModalContactBtn={setActiveContactModal}
                toggleClass={activeContactModal}
                setResumeModal={setResumeModal}
            />
            <ResumeModal
                resumeModal={resumeModal}
                setResumeModal={setResumeModal}
            />
        </div>
    )
}
