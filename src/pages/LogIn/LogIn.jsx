import React from 'react'
import Header from '../../components/Header/Header'
import SignIn from '../../components/SignIn/SignIn'
import styles from './LogIn.module.scss'

function LogIn() {
	return (
		<main className={styles['LogIn']}>
			<div className={styles['LogIn__header']}>
				<Header />
			</div>
			<div className={styles['LogIn__form']}>
				<SignIn />
			</div>
			<figure className={styles['LogIn__bannerTwo']}>
				<img src="" alt="BannerTwo" />
			</figure>
		</main>
	)
}

export default LogIn
