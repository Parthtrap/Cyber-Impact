import "./UserLoginPage.css";

const UserLoginPage = () => {
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
        console.log(Email, Password);
    };

    return (
        <>
            <div className="login-page-div">
                <div className="login-form-div">
                    <h1 className="login-form-title">USER LOGIN</h1>
                    <form>
                        <div class="txt_field">
                            <input
                                onChange={updateEmail}
                                type="text"
                                required
                            />
                            <span></span>
                            <label> Username</label>
                        </div>

                        <div class="txt_field">
                            <input
                                onChange={updatePassword}
                                type="password"
                                required
                            />
                            <span></span>
                            <label> Password</label>
                        </div>

                        <div class="pass">
                            <a href="./forgotpassword">Forgot Password?</a>
                        </div>
                        <input
                            className="user-login-submit-button"
                            onClick={submitPressed}
                            type="submit"
                            value="Login"
                        />
                        <div class="signup_link">
                            Not Signed Up? <a href="./UserSignup">User Signup</a>
                        </div>
                        <div class="signup_link">
                            Not a User?{" "}
                            <a href="./MarketLogin">Marketer Login</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default UserLoginPage;
