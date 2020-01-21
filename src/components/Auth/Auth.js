import auth0 from "auth0-js";

const LOGIN_SUCCESS_PAGE = "/admin";
const LOGIN_FAILURE_PAGE = "/invalidlogin";
export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: "dev-usiqk6y8.auth0.com",
        clientID: "2Br0ihB9660Tf5Ica9LV3drS2O3ruUOW",
        redirectUri: "http://localhost:3000/callback",
        audience: "2Br0ihB9660Tf5Ica9LV3drS2O3ruUOW",
        responseType: "token id_token",
        scope: "openid"
    });

    constructor() {
        this.login = this.login.bind(this);
    }

    login() {
        this.auth0.authorize();
    }

    handleAuthentication() {
        //parse the response back and check if we got authResults and if the
        // user approved and if we got a token.
        this.auth0.parseHash((err, authResults) => {
            if (authResults && authResults.accessToken && authResults.idToken) {
                let expiresAt = JSON.stringify(
                    authResults.expiresIn * 1000 + new Date().getTime()
                );
                localStorage.setItem("access_token", authResults.accessToken);
                localStorage.setItem("id_token", authResults.idToken);
                localStorage.setItem("expires_at", expiresAt);
                window.location.hash = "";
                window.location.pathname = LOGIN_SUCCESS_PAGE;
            } else {
                window.location.pathname = LOGIN_FAILURE_PAGE;
                console.log(err);
            }
        });
    }
    isAuthenticated() {
        let expiresAt = JSON.stringify(localStorage.getItem("expires_at"));
        return new Date().getTime() < expiresAt;
    }
}
