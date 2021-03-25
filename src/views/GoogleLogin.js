import React, { useState } from "react";
// import GoogleLogin from "react-google-login";
// export class GoogleLogin extends Comonent {}

// function handleGoogleLogin(e) {
//   window.open("http://kwitter-api-b.herokuapp.com/auth/google/login");
// }
// export default function Google() {
//   return (
//     <div>
//       <button onClick={handleGoogleLogin}/>

//        </button>

//     </div>
//   );
// }

/* <button onClick={handleGoogleLogin}>Google login</button>; */

// function Glogin() {
//   const [user, setUser] = useState({ name: "", email: "" });
//   const [error, setError] = useState("");

//   const responseGoogle = (response) => {
//     console.log(response);
//     console.log(response.profile);
//   };
//   return (
//     <div>
//       {/* clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID} */}
//       <GoogleLogin
//         clientId="189459720664-knuo5khaqs8f918svdj69e149g7u8d8h.apps.googleusercontent.com"
//         buttonText="login"
//         onSuccess={responseGoogle}
//         onFailure={responseGoogle}
//         cookiePolicy={"single_host_origin"}
//       />
//     </div>

//     // const handleLogin = async googleData => {
//     //     const res = await fetch("/api/v1/auth/google", {
//     //         method: "POST",
//     //         body: JSON.stringify({
//     //         token: googleData.tokenId
//     //       }),
//     //       headers: {
//     //         "Content-Type": "application/json"
//     //       }
//     //  })
//     //  const data = await res.json()

//     //}
//   );
// }

// export default Glogin;
