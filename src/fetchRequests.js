const baseURL = "https://socialapp-api.herokuapp.com/";
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
};

export const messageRequest = () => {
  return fetch(baseURL + "messages").then((res) => res.json());
};

export const postMessageRequest = (userMessages, token) => {
  return fetch(baseURL + "messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({
      text: userMessages,
    }),
  }).then((res) => res.json());
};

export const DeleteuserRequest = (token, username) => {
  return fetch(baseURL + "users/" + username, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token },
  }).then((res) => res.json());
};
