import { ValidateEmail } from "./../../HelperClasses/HelperFunctions";
import "./LoginPage.css";

const LoginPage = () => {
	let Email = "";
	let Password = "";
	const updateEmail = (event) => {
		Email = event.target.value;
	};
	const updatePassword = (event) => {
		Password = event.target.value;
	};
	const submitPressed = (event) => {
		event.preventDefault();
		if (!ValidateEmail(Email)) alert("Enter a Valid Email!");
		else if (Password.length < 8) alert("Password should be atlest 8 characters long!");
		else console.log(Email, Password);
	};

	return (
		<>
			<div className="login-page-div">
				<div className="login-form-div">
					<h1 className="login-form-title">LOGIN</h1>
					<form>
						<div class="txt_field">
							<input onChange={updateEmail} type="text" required />
							<span></span>
							<label>Email</label>
						</div>

						<div class="txt_field">
							<input onChange={updatePassword} type="password" required />
							<span></span>
							<label> Password</label>
						</div>

						<div class="pass">
							<a href="./forgotpassword">Forgot Password?</a>
						</div>
						<input className="login-submit-button" onClick={submitPressed} type="submit" value="Login" />
						<div class="signup_link">
							Not Signed Up? <a href="./Signup">User Signup</a>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default LoginPage;
