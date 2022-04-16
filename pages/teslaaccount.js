import React, { useEffect } from 'react';
import { useRouter } from 'next/router'
import { useAuth } from '../context/AuthUserContext';
import Head from 'next/head'
import styles from '../styles/Account.module.css'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountNavbar from '../components/AccountNavbar';

const LoggedIn = () => {
    const { authUser, loading, signOut } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if(!loading && !authUser)
            router.push("/sign_in")
    }, [authUser, loading])

    return (
        <>
            {
                loading? 
                <p>loading...</p>
                :
                <>
                    <AccountNavbar />
                    <Head>
                        <title>Your Account</title>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                    </Head>
                    <div className={styles.logInfo}>
                        {authUser && <p>Youre logged as <b>{authUser.email}s</b>email</p>}
                        <button className={styles.logOutBtn} onClick={signOut}>
                            <ExitToAppIcon className={styles.btnIcon} />
                            Sign Out
                        </button>
                    </div>
                    <div className={styles.carPurchase}>
                        <img
                            src="/images/modelX.png"
                            alt="Model X purchase"
                            className={styles.modelX}
                        />
                        <h1>Model X</h1>
                        <div className={styles.btnMain}>
                            <a href='#' className={styles.btn}>
                                custom order
                            </a>
                            <a href='#' className={styles.btn}>
                                existing inventory
                            </a>
                        </div>
                    </div>
                </>
            }
        </>
    );
};

export default LoggedIn;