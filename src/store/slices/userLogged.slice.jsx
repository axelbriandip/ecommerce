import { createSlice } from '@reduxjs/toolkit';

export const userLoggedSlice = createSlice({
    name: 'userLogged',
    initialState: [],
    reducers: {
        setUserLogged: (state, action) => {
            return action.payload
        }
    }
})

export const { setUserLogged } = userLoggedSlice.actions;

export default userLoggedSlice.reducer;