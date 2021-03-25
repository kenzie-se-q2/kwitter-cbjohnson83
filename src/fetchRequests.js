
//const baseURL = "https://socialapp-api.herokuapp.com/";
const baseURL = "https://kwitter-api-b.herokuapp.com/";


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

export const getUserProfile = (
  token,
  pictureLocation,
  username,
  displayName,
  about
) => {
  return fetch(baseURL + `users/${username}`, {
    method: "GET",
    headers: {
      Authorization: "Bearer" + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pictureLocation,
      username,
      displayName,
      about,
    }),
  });
};

// export const getUserProfile = (username) => {
//   return fetch(baseURL + `users/${username}`).then((res) => res.json());
// };

export const patchUserProfile = (token, username, newUserInfo) => {
  return fetch(baseURL + `users/${username}`, {
    method: "PATCH",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUserInfo),
  }).then((res) => res.json());
};

export const putUserPicture = (token, username, pictureData) => {
  let formData = new FormData();
  formData.append("picture", pictureData);
  return fetch(baseURL + `users/${username}/picture`, {
    method: "PUT",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "multipart/form-data",
    },
    body: formData,
  }).then((res) => res.json());
};
