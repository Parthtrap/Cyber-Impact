import React, { useRef, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth-context";
import { ValidateEmail } from "../../HelperClasses/HelperFunctions";
import "./SignUpPage.css";

const SignUpPage = () => {
	const auth = useContext(AuthContext);

	const unameInputRef = useRef();
	const emailInputRef = useRef();
	const passwordInputRef = useRef();
	const confirmPasswordInputRef = useRef();

	const submitPressed = async (event) => {
		const Username = unameInputRef.current.value;
		const Email = emailInputRef.current.value;
		const Password = passwordInputRef.current.value;
		const ConfirmPassword = confirmPasswordInputRef.current.value;

		if (!ValidateEmail(Email)) {
			alert("Please enter a valid email.");
		}
		event.preventDefault();
		if (Password !== ConfirmPassword) {
			alert("Password doesnt match Confirm Password");
		} else {
			try {
				const userdata = JSON.stringify({
					name: Username,
					email: Email,
					password: Password,
				});
				const response = await fetch("http://localhost:5000/api/user/signup", {
					method: "POST",
					headers: {
						"Content-type": "application/json",
					},
					body: userdata,
				});
				const responseData = await response.json();
				if (response.status === 201) {
					auth.login({
						username: responseData.user.username,
						id: responseData.user._id,
					});
					console.log(responseData);
				} else {
					console.log(responseData.error);
				}
			} catch (err) {
				console.log(err);
				return;
			}
		}
	};

	return (
		<>
			<div className="signup-page-div">
				<div className="signup-form-div">
					<h1 className="signup-form-title">USER SIGNUP</h1>
					<form method="post">
						<div class="signup-page-txt-field">
							<input ref={unameInputRef} type="username" required />
							<span></span>
							<label> Username</label>
						</div>

						<div class="signup-page-txt-field">
							<input ref={emailInputRef} type="text" required />
							<span></span>
							<label> Email Address</label>
						</div>

						<div class="signup-page-txt-field">
							<input ref={passwordInputRef} type="password" required />
							<span></span>
							<label> Password</label>
						</div>

						<div class="signup-page-txt-field">
							<input ref={confirmPasswordInputRef} type="password" required />
							<span></span>
							<label> Re-confirm Password</label>
						</div>

						<input type="submit" value="Make an Account" onClick={submitPressed} />
						<div class="signup-page-signup-link">
							Already a User? <Link to="./Login">User Login</Link>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default SignUpPage;
