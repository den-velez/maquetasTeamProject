import React from 'react'
import styles from './SignUp.module.scss'

function SignUp() {
	return (
		<div className={styles['SignUp']}>
			<form className={styles['SignUp__form']}>
				<h2>Register</h2>
				<label htmlFor="name">Name</label>
				<input type="text" id="name" placeholder="Name" />
				<label htmlFor="email">Email</label>
				<input type="text" id="email" placeholder="Email" />
				<label htmlFor="password">Password</label>
				<input type="password" id="password" placeholder="Password" />
			</form>
			<button className={styles['SignUp__btnsignup']}>Sing Up</button>
		</div>
	)
}

export default SignUp
