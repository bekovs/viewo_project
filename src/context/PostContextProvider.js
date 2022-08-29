import axios from 'axios';
import React, { useContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { ACTIONS, API } from '../helpers/consts'

export const postContext = React.createContext();
export const usePost = () => useContext(postContext);

const INIT_STATE = {
  posts: [],
  postDetails: {},
}

const reducer = (state=INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_POSTS:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
}

const PostContextProvider = ({ children }) => {

  const navigate = useNavigate();

  const token = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : "";
  
  const config = {
    headers: { 
      "Content-Type": "multipart/form-data",
      "Authorization": `Bearer ${token.access}`
    },
  };

  const [state, dispatch] = useReducer(reducer, INIT_STATE)

  const getPosts = async () => {
    const { data } = await axios(`${API}video/videos/`);

    dispatch({
      type: ACTIONS.GET_POSTS,
      payload: data.results,
    })
    console.log(data.results)
  }
  

  const addPost = async (newPost) => {
    let fakePost = {
      title: "fake post",
      description: "fake descr",
      views: 4344,
      user: 7,
    }
    let res = await axios.post(`${API}video/videos/create/`, fakePost, config)
    console.log(res);
  }

  const values = {
    getPosts,
    addPost,
  }

  return (
    <postContext.Provider
      value={values}
    >
      {children}
    </postContext.Provider>
  );
};

export default PostContextProvider;