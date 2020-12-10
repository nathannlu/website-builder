import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING
} from "./types";

// Register User
export const registerUser = (userData, history, callback) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => {
			dispatch(loginUser(userData))
			// history.push(`/signup/success/?email=${email}`);
		}) // re-direct to login on successful register
    .catch(err =>{
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
		})
		.then(() => {
			if (typeof callback == 'function') {
				callback();	
			}
		})
};
// Login - get user token
export const loginUser = (userData, callback) => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      // Save to localStorage
			// Set token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);

			console.log(decoded);

      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
		.then(() => {
			if (typeof callback == 'function') {
				callback();	
			}
		})
};

export const authenticate = (token, callback) => dispatch => {
	if(!!token) {
		const requestBody = {
			token
		};
		axios
			.post('/api/users/verify-token', requestBody)	
			.then(res => {
				const user = res.data;

				if(typeof callback == 'function') {
					if(user) {
						callback(true);
					} else {
						callback(false);
					}				
				}
			})
			.catch(() => {
				if(typeof callback == 'function') {
					callback(false);
				}
			})
	} else {
		if(typeof callback == 'function') {
			callback(false);
		}
	}
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};
// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
