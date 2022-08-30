import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const chatContext = React.createContext();
export const useChat = () => useContext(chatContext);

const API = "https://tektonik.herokuapp.com/";

const ChatContextProvider = ({ children }) => {

  // const chatStart = async() => {
  //   let token = JSON.parse(localStorage.getItem("token"));

  //   try {
  //     const Authorization = `Bearer ${token.access}`;

  //     // let res = await axios.post(
  //     //   `${API}/chat/create/`,

  //     //   ,
  //     //   { headers: { Authorization } }
  //     // );

  //   } catch(error) {
      
  //   }
  // }

  return (
    <chatContext.Provider
      value={{ }}
    >
      {children}
    </chatContext.Provider>
  );
}

export default ChatContextProvider;