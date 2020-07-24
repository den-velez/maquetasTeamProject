import React from 'react'
import Header from '../../components/Header/Header'
import SignUp from '../../components/SignUp/SignUp'
import styles from './Landing.module.scss'

function Landing() {
	return (
		<main className={styles['Landing']}>
			<div className={styles['Landing__header']}>
				<Header />
			</div>
			<figure className={styles['Landing__banner']}>
				<img src="" alt="Banner" />
			</figure>
			<div className={styles['Landing__signup']}>
				<SignUp />
			</div>
			<figure className={styles['Landing__bannerTwo']}>
				<img src="" alt="BannerTwo" />
			</figure>
		</main>
	)
}

export default Landing
