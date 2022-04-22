import React from "react";
import "./SignUpPage.css";

const SignUpPage = () => {
	let Username = "";
	let Email = "";
	let Password = "";
	let ConfirmPassword = "";
	const updateUsername = (event) => {
		Username = event.target.value;
	};
	const updateEmail = (event) => {
		Email = event.target.value;
	};
	const updatePassword = (event) => {
		Password = event.target.value;
	};
	const updateConfirmPassword = (event) => {
		ConfirmPassword = event.target.value;
	};
	const submitPressed = (event) => {
		event.preventDefault();
		if (Password !== ConfirmPassword) alert("Password doesnt match Confirm Password");
		else {
			console.log(Username, Email, Password, ConfirmPassword);
		}
	};

	return (
		<>
			<div className="signup-page-div">
				<div className="signup-form-div">
					<h1 className="signup-form-title">USER SIGNUP</h1>
					<form method="post">
						<div class="txt_field">
							<input type="username" onChange={updateUsername} required />
							<span></span>
							<label> Username</label>
						</div>

						<div class="txt_field">
							<input type="text" onChange={updateEmail} required />
							<span></span>
							<label> Email Address</label>
						</div>

						<div class="txt_field">
							<input type="password" onChange={updatePassword} required />
							<span></span>
							<label> Password</label>
						</div>

						<div class="txt_field">
							<input type="password" onChange={updateConfirmPassword} required />
							<span></span>
							<label> Re-confirm Password</label>
						</div>

						<input type="submit" value="Make an Account" onClick={submitPressed} />
						<div class="signup_link">
							Already a User? <a href="./Login">User Login</a>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default SignUpPage;
