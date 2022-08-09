import React from "react";

function Login() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        username: "user1@user.com",
        password: "123456",
    });

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    fetch(
        "https://jwt-auth-nestjs-a7nzvqqiy-viniciusdlx.vercel.app/login",
        requestOptions
    )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    return <div>Login</div>;
}

export default Login;
