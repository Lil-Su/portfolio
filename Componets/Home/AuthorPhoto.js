import React from 'react';
import styles from '../../styles/Home.module.css';
import authorImages  from '../../public/author/sd.jpg'
import AnimAuthorPhoto from "@/Componets/Home/AnimAuthorPhoto";
const AuthorPhoto = () => {
    return (
        <div className={styles.author_photo_block}>
            <div className={styles.author_photo}>
                <img src={authorImages.src}/>
                <AnimAuthorPhoto/>
            </div>

        </div>
    );
};

export default AuthorPhoto;
