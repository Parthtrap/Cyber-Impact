import { ValidateEmail } from "./../../HelperClasses/HelperFunctions";
import React from "react";
import "./ForgotPassword.css";

const ForgotPassword = () => {
	let Email = "";

	const updateEmail = (event) => {
		Email = event.target.value;
	};

	const submitPressed = (event) => {
		event.preventDefault();
		if (!ValidateEmail(Email)) alert("Enter a Valid Email!");
		else console.log(Email);
	};

	return (
		<>
			<div className="forgotpassword-page-div">
				<div className="forgotpassword-form-div">
					<h1 className="forgotpassword-form-title">FORGOT PASSWORD?</h1>
					<form method="post">
						<div class="forgot-password-txt-field">
							<input type="text" onChange={updateEmail} required />
							<span></span>
							<label> Email Adress</label>
						</div>

						<input className="forgetpassword-submit-button" onClick={submitPressed} type="submit" value="ForgotPassword" />
						<div class="forgot-password-forgot-link">
							Not a member? <a href="./SignUp">Signup</a>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default ForgotPassword;
