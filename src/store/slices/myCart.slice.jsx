import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import {setIsLoading} from './isLoading.slice';
import { getPurchasesThunk } from './purchases.slice';

export const myCartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        setMyCart: (state, action) => {
            return action.payload
        }
    }
})

export const getMyCartThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/cart`, getConfig())
        .then(res => dispatch(setMyCart(res.data.data.cart.products)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const addCartThunk = body => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post(`https://ecommerce-api-react.herokuapp.com/api/v1/cart`, body, getConfig())
        .then(() => dispatch(getMyCartThunk()))
        .finally(() => dispatch(setIsLoading(false)));
}

export const buyCartThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post(`https://ecommerce-api-react.herokuapp.com/api/v1/purchases`, {}, getConfig())
        .then(() => {
            dispatch(setMyCart([]));
            dispatch(getPurchasesThunk());
        })
        .finally(() => dispatch(setIsLoading(false)));
}

export const deleteCartThunk = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.delete(`https://ecommerce-api-react.herokuapp.com/api/v1/cart/${id}`, getConfig())
        .then(() => dispatch(getMyCartThunk()))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setMyCart } = myCartSlice.actions;

export default myCartSlice.reducer;