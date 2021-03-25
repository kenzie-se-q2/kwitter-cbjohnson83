
//const baseURL = "https://socialapp-api.herokuapp.com/";
const baseURL = "https://kwitter-api-b.herokuapp.com/";
// const getPicture =


export const loginRequest = (username, password) => {
  return fetch(baseURL + "auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => res.json());
};

export const logoutRequest = (token) => {
  return fetch(baseURL + "auth/logout", {
    headers: { Authorization: "Bearer " + token },
  }).then((res) => res.json());
};

export const NewUserRequest = (username, displayName, password) => {
  return fetch(baseURL + "users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      displayName,
      password,
    }),
  });

};
export const DeleteuserRequest = (token, username)=>{
  return fetch(baseURL + "users/" + username,{
    method: "DELETE",
    headers: { Authorization: "Bearer " + token}
  }).then((res) => res.json());
  
}
=======
};

// export const getUserProfile = (
//   token,
// pictureLocation,
// username
// displayName,
// about
// ) => {
//   return fetch(baseURL + `users/${username}/`, {
//     method: "GET",
//     headers: {
//       Authorization: "Bearer" + token,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       username,
//     }),
//   });
// };

// export const getUserProfile = (username) => {
//   return fetch(baseURL + `users/${username}`).then((res) => res.json());
// };

export const getUserPhoto = (username, pictureLocation) => {
  return baseURL + `users/${username}/picture`;
};

export const patchUserProfile = (token, username, about, displayName) => {
  return fetch(baseURL + `users/${username}`, {
    method: "PATCH",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(about, displayName),
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
};

export const putUserPicture = (token, username, pictureData) => {
  let formData = new FormData();
  formData.append("picture", pictureData);
  return fetch(baseURL + `users/${username}/picture`, {
    method: "PUT",
    headers: {
      Authorization: "Bearer " + token,
    },
    body: formData,
  }).then((res) => res.json());
  // .then(images => {
  //   // Then create a local URL for that image and print it
  //   getPicture = URL.createObjectURL(images)
  //   console.log(getPicture) }
};

