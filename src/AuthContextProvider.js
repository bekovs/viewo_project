import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext);

const API = "https://tektonik.herokuapp.com/";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const config = {
    headers: { "Content-Type": "multipart/form-data" },
  };

  const register = async (email, username, password, password_confirm) => {
    let formData = new FormData();
    formData.append("email", email);
    formData.append("username", username);
    formData.append("password", password);
    formData.append("password_confirm", password_confirm);
    try {
      const res = await axios.post(
        `${API}user_account/register/`,
        formData,
        config
      );
      console.log(res);
    } catch (error) {
      console.log(error);
      setError("Error occured");
    }
  };

  const login = async (email, password) => {
    // console.log(user);
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    try {
      let res = await axios.post(`${API}user_account/login/`, formData, config);
      navigate("/");
      console.log(res.data);
      localStorage.setItem("token", JSON.stringify(res.data));
      localStorage.setItem("username", email);
    } catch (error) {
      console.log(error);
      setError("Wrong username or password", error);
    }
  };

  async function checkAuth() {
    let token = JSON.parse(localStorage.getItem("token"));

    try {
      const Authorization = `Bearer ${token.access}`;

      let res = await axios.post(
        `${API}api/token/refresh/`,
        {
          refresh: token.refresh,
        },
        { headers: { Authorization } }
      );

      localStorage.setItem(
        "token",
        JSON.stringify({ refresh: token.refresh, access: res.data.access })
      );

      let username = localStorage.getItem("username");
      setUser(username);
    } catch (error) {
      logout();
    }
  }

  const logout = async () => {
    console.log("do proverki");
    if (localStorage.getItem("token")) {
      console.log("prowel");
      let refresh = JSON.parse(localStorage.getItem("token")).refresh;
      console.log(refresh);
      let formData = new FormData();
      formData.append("refresh", refresh);
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("user");
      await axios.post(`${API}user_account/logout`, formData);
    } else {
      return;
    }
  };

  return (
    <authContext.Provider
      value={{
        register,
        login,
        checkAuth,
        logout,
        error,
        user,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
