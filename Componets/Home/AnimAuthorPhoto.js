import React from 'react';
import styles from '../../styles/Home.module.css'
const AnimAuthorPhoto = () => {
    let quantity=[]
    for (let i = 0; i < 10; i++) {
        quantity.push(i)
    }
    return (
        <ul className={styles.animate_container}>
            {
                quantity.map((num)=>{
                    return <li key={num}></li>
                })
            }
        </ul>
    )
};

export default AnimAuthorPhoto;
