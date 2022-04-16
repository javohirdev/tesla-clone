import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthUserContext';
import Navbar from '../components/Navbar'
import Head from 'next/head';
import Link from 'next/link'
import styles from '../styles/Auth.module.css'

const Register = () => {
    const [email, setEmail] = useState("") //email uchun state
    const [passwordOne, setPasswordOne] = useState("")  // birinchi parol inputi
    const [passwordTwo, setPasswordTwo] = useState("") // ikkinchi parol inputi
    const router = useRouter()
    const [error, setError] = useState(null)


    const { createUserWithEmailAndPassword } = useAuth()

    const onSubmit = event => {
        setError(null)
        if(passwordOne === passwordTwo)
            createUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                router.push("/teslaaccount") // profilga yonaltiramiz
            })
            .catch(error => {
                setError(error.message)
            })
        
        else
            setError("Passwords don't match!")
        event.preventDefault()
    }

    return (
        <>
            <Head>
                <title>Sign Up</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <Navbar />
            <div className={styles.login}>
                <form className={styles.form} onSubmit={onSubmit}>
                    <h2 className={styles.signInText}>Sign Up</h2>
                    {error && <h4 className={styles.errorText}>{error}</h4>}

                    <label htmlFor="email">Email Address</label>
                    <input 
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        name="email"
                        className={styles.input}
                    />
                    <label htmlFor="passwordOne">Password</label>
                    <input 
                        type="password"
                        value={passwordOne}
                        onChange={(event) => setPasswordOne(event.target.value)}
                        name="passwordOne"
                        className={styles.input}
                    />
                    <label htmlFor="passwordTwo">Confirm Password</label>
                    <input 
                        type="password"
                        value={passwordTwo}
                        onChange={(event) => setPasswordTwo(event.target.value)}
                        name="passwordTwo"
                        className={styles.input}
                    />
                    <button className={styles.loginBtn}>Create Account</button>
                </form>
                <hr className={styles.line} />
                <div className={styles.signUpArea}>
                    <Link href={{
                        pathname: "/sign_in"
                    }}>
                        <button className={styles.createAccount}>
                            Sign In
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Register;