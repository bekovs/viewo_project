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

const token = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : "";
  
const config = {
  headers: { 
    "Content-Type": "multipart/form-data",
    "Authorization": `Bearer ${token.access}`
  },
};

const PostContextProvider = ({ children }) => {

  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, INIT_STATE)

  const getPosts = async () => {
    const { data } = await axios(`${API}video/videos/${window.location.search}`);

    dispatch({
      type: ACTIONS.GET_POSTS,
      payload: data.results,
    })
  }
  

  const addPost = async (newPost) => {
    newPost.append("user", 7);
    let res = await axios.post(`${API}video/videos/create/`, newPost, config);
    console.log(res);
  }



  const values = {
    getPosts,
    addPost,
    posts: state.posts,
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