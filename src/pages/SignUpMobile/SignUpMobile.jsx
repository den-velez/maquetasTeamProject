import React from 'react'
import styles from './SignUpMobile.module.scss'

import HeaderMobile from '../../components/HeaderMobile/HeaderMobile'
import SignUp from '../../components/SignUp/SignUp'

function SignUpMobile() {
	return (
		<div className={styles['SignUpMobile']}>
			<HeaderMobile />
			<SignUp />
		</div>
	)
}

export default SignUpMobile
