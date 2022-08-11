import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import {setIsLoading} from './isLoading.slice';

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

export const { setMyCart } = myCartSlice.actions;

export default myCartSlice.reducer;