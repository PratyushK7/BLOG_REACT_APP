import jsonPlaceHolder from "../apis/jsonPlaceholder";
import _ from "lodash";

export const fetchPostsAndUser = () => async (dispatch) => {
  console.log("About to fetch");
  await dispatch(fetchPosts());
  console.log("Fetched");
};

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceHolder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceHolder.get(`users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};
