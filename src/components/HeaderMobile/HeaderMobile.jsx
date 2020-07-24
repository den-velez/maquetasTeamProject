import React from 'react'
import styles from './HeaderMobile.module.scss'

function HeaderMobile() {
	return (
		<div className={styles['HeaderMobile']}>
			<figure className={styles['HeaderMobile__logo']}>
				<img src="" alt="Logo Ceol" />
			</figure>
		</div>
	)
}

export default HeaderMobile
