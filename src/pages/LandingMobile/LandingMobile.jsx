import React from 'react'
import HeaderMobile from '../../components/HeaderMobile/HeaderMobile'
import styles from './LandingMobile.module.scss'

function LandingMobile() {
	return (
		<div className={styles['Landing']}>
			<HeaderMobile />
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

export default LandingMobile
