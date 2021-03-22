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

export const getUsers = () => {
  return fetch(baseURL + "users").then((res) => res.json());
};

export const getUser = (username) => {
  return fetch(baseURL + `users/${username}`).then((res) => res.json());
};

export const patchUser = (token, username, newUserInfo) => {
  return fetch(baseURL + `users/${username}`, {
    method: "PATCH",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUserInfo),
  }).then((res) => res.json());
};
