import React from "react";
import "./ForgotPassword.css";

const ForgotPassword = () => {
    return (
        <>
            <div className="forgotpassword-page-div">
                <div className="forgotpassword-form-div">
                    <h1 className="forgotpassword-form-title">
                        FORGOT PASSWORD?
                    </h1>
                    <form method="post">
                        <div class="txt_field">
                            <input type="text" required />
                            <span></span>
                            <label> Email Adress</label>
                        </div>

                        <input className="forgetpassword-submit-button" type="submit" value="Login" />
                        <div class="forget_link">
                            Not a member? <a href="./UserSignup">Signup</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ForgotPassword;
