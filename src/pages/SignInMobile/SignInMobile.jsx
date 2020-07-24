import React from 'react'
import styles from './SignInMobile.module.scss'

import HeaderMobile from '../../components/HeaderMobile/HeaderMobile'
import SignIn from '../../components/SignIn/SignIn'

function SignInMobile() {
	return (
		<div className={styles['SignInMobile']}>
			<HeaderMobile />
			<SignIn />
		</div>
	)
}

export default SignInMobile
