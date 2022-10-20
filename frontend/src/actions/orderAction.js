import {
    ORDER_CREATE_FAIL,
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
  } from "../constants/orderConstant";
  import axios from 'axios';

  export const orderCreate = (order) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ORDER_CREATE_REQUEST,
      });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.post(`/api/orders`, order, config);
  
      dispatch({
        type: ORDER_CREATE_SUCCESS,
        payload: data,
      });
    //   dispatch({
    //     type: USER_LOGIN_SUCCESS,
    //     payload: data,
    //   });
    //   localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
    //   if (message === "Not authorized, token failed") {
    //     dispatch(logout());
    //   }
      dispatch({
        type: ORDER_CREATE_FAIL,
        payload: message,
      });
    }
  };