import React from 'react'
import styles from './Landing.module.scss'
// import logoGreen from '../assets/CeolLogoGreen.svg'

function Landing() {
	return (
		<div className={styles['Landing']}>
			<figure className={styles['Landing__logo']}>
				<img src="" alt="Logo Ceol" />
			</figure>
			<div className={styles['Landing__banner']}>
				<p>the new way to hear your music!</p>
				<figure>
					<img src="" alt="" />
				</figure>
				<button>register now, it's free</button>
			</div>
			<button className={styles['Landing__btnsignin']}>Sing In</button>
		</div>
	)
}

export default Landing
