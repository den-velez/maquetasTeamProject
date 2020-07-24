import React from 'react'
import styles from './Header.module.scss'

function Header() {
	return (
		<header className={styles['Header']}>
			<figure className={styles['Header__logo']}>
				<img src="" alt="Logo CEOL" />
			</figure>
		</header>
	)
}

export default Header
