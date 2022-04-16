import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthUserContext';
import Navbar from '../components/Navbar'
import Head from 'next/head';
import Link from 'next/link'
import styles from '../styles/Auth.module.css'

export default function Login() {
    const [email, setEmail] = useState("") //email uchun state
    const [password, setPassword] = useState("")  // birinchi parol inputi
    const router = useRouter()
    const [error, setError] = useState(null)

    const { signInWithEmailAndPassword } = useAuth()

    const onSubmit = event => {
        setError(null)
        signInWithEmailAndPassword(email, password)
        .then(authUser => {
            router.push("/teslaaccount") // profil componentini manzilini route
        })
        .catch(error => {
            setError(error.message)
        })
        event.preventDefault()
    }

    return(
        <>
            <Head>
                <title>Sign In</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <Navbar />
            <div className={styles.login}>
                <form className={styles.form} onSubmit={onSubmit}>
                    <h2 className={styles.signInText}>Sign In</h2>
                    {error && <h4 className={styles.errorText}>{error}</h4>}

                    <label htmlFor="email">Email Address</label>
                    <input 
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        name="email"
                        className={styles.input}
                    />
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        name="password"
                        className={styles.input}
                    />
                    <button className={styles.loginBtn}>Login</button>
                </form>
                <hr className={styles.line} />
                <div className={styles.signUpArea}>
                    <Link href={{
                        pathname: "/sign_up"
                    }}>
                        <button className={styles.createAccount}>
                            create an account
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}