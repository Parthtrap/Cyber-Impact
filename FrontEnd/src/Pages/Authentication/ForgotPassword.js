import { ValidateEmail } from "./../../HelperClasses/HelperFunctions";
import React, { useRef } from "react";
import "./ForgotPassword.css";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
	// Initiating References
	const emailInputRef = useRef(); // Reference for Email Input

	// Submit Button On Click Handler
	const submitButtonHandler = (event) => {
		event.preventDefault(); // Preventing Page Reloading

		const Email = emailInputRef.current.value; // Getting Email string from edit text

		// Check if Email is valid or not
		if (!ValidateEmail(Email)) {
			alert("Please Enter a Valid Email!"); // Invalid Email
		} else {
			console.log(Email); // Valid Email
		}
	};

	return (
		<>
			<div className="forgotpassword-page-div">
				<div className="forgotpassword-form-div">
					<h1 className="forgotpassword-form-title">FORGOT PASSWORD?</h1>
					<form method="post">
						<div class="forgot-password-txt-field">
							<input type="text" ref={emailInputRef} required />
							<span></span>
							<label> Email Adress</label>
						</div>

						<input className="forgetpassword-submit-button" onClick={submitButtonHandler} type="submit" value="ForgotPassword" />
						<div class="forgot-password-forgot-link">
							Not a member? <Link to="./SignUp">Signup</Link>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default ForgotPassword;
