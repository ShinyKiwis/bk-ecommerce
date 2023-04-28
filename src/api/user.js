import client from "./client";

const logIn = (username, password) =>
  client.get(`/user/${username}/${password}`);

const register = (username, password) => client.post('/user/register', {username, password})

export default {
    logIn,
    register,
}