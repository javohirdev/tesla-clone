import React from 'react';
import styles from '../styles/Home.module.css'
import Reveal from 'react-reveal/Reveal'

const SolarPanels = () => {
    return (
        <section className={styles.section}>
            <Reveal effect="fadeInUp">
                <div className={styles.textsArea}>
                    <h3>Solar Panels</h3>
                    <p>Lowest Cost Solar Panels in America</p>
                </div>
            </Reveal>
            <Reveal effect="fadeInUp2">
                <div className={styles.buttons}>
                    <div className={styles.btnMain}>
                        <a href='#' className={styles.btn}>
                            order now
                        </a>
                        <a href='#' className={styles.btn}>
                            learn more
                        </a>
                    </div>
                </div>
            </Reveal>
        </section>
    );
};

export default SolarPanels;