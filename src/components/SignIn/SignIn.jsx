import React from 'react'
import styles from './SignIn.module.scss'

function SignIn() {
	return (
		<div className={styles['SignIn']}>
			<form className={styles['SignIn__form']}>
				<h2>Welcome to Ceol!</h2>
				<label htmlFor="email">Email</label>
				<input type="text" id="email" placeholder="Type your email" />
				<label htmlFor="">Password</label>
				<input type="password" id="password" placeholder="Password" />
				<button>Sing In</button>
			</form>
			<button className={styles['SignIn__forgotPassword']}>
				forgot password
			</button>
		</div>
	)
}

export default SignIn
