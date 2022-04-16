import React from 'react';
import styles from '../styles/Home.module.css'
import Reveal from 'react-reveal/Reveal'

const Accessories = () => {
    return (
        <section className={styles.section}>
            <Reveal effect="fadeInUp">
                <div className={styles.textsArea}>
                    <h3>Accessories</h3>
                </div>
            </Reveal>
            <Reveal effect="fadeInUp2">
                <div className={styles.buttons}>
                    <div className={styles.btnMain}>
                        <a href='#' className={styles.btn}>
                            shop now
                        </a>
                    </div>
                </div>
            </Reveal>
        </section>
    );
};

export default Accessories;