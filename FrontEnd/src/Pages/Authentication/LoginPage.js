import React, { useRef, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth-context";
import { ValidateEmail } from "../../HelperClasses/HelperFunctions";
import "./LoginPage.css";

const LoginPage = () => {
	// Calling the Context
	const auth = useContext(AuthContext);

	// Initiating Refrences
	const emailInputRef = useRef();
	const passwordInputRef = useRef();

	// Submit Button On Click Handler
	const submitButtonHandler = async (event) => {
		event.preventDefault(); // Preventing Page Reloading

		// Getting values from edit texts
		const Email = emailInputRef.current.value;
		const Password = passwordInputRef.current.value;

		// Check for Valid Email and Password Length
		if (!ValidateEmail(Email)) alert("Enter a Valid Email!");
		else if (Password.length < 8) alert("Password should be atlest 8 characters long!");
		else {
			// Email and Password are Valid
			try {
				const userdata = JSON.stringify({
					email: Email,
					password: Password,
				});

				const response = await fetch("http://localhost:5000/api/user/login", {
					method: "POST",
					headers: {
						"Content-type": "application/json",
					},
					body: userdata,
				});

				const responseData = await response.json();

				// Email Password Matches => Login
				if (response.status === 201) {
					auth.login(responseData.user);

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
			<div className="login-page-div">
				<div className="login-form-div">
					<h1 className="login-form-title">LOGIN</h1>
					<form>
						<div className="login-page-txt-field">
							<input ref={emailInputRef} type="text" required />
							<span></span>
							<label>Email</label>
						</div>

						<div className="login-page-txt-field">
							<input ref={passwordInputRef} type="password" required />
							<span></span>
							<label> Password</label>
						</div>

						<div className="pass">
							<Link to="./forgotpassword">Forgot Password?</Link>
						</div>
						<input className="login-submit-button" onClick={submitButtonHandler} type="submit" value="Login" />
						<div className="login-page-signup-link">
							Not Signed Up? <Link to="./Signup">User Signup</Link>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default LoginPage;
