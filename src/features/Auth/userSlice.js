import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import userApi from '../../api/userApi';

export const register = createAsyncThunk(
    'user/register',
    async (payload) => {
        //call api to register
        const res = await userApi.register(payload);
        //save data to localstorage
        localStorage.setItem('access_token', res.data.jwt);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        return res.data.user;
    },
  )
export const login = createAsyncThunk(
    'user/login',
    async (payload) => {
        //call api to register
        const res = await userApi.login(payload);
        //save data to localstorage
        localStorage.setItem('access_token', res.data.jwt);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        return res.data.user;
    },
  )

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: {},
        settings: {},
    },
    reducers: {
    },
    extraReducers:(builder) => {
       builder
       .addCase(register.fulfilled, (state, action) => {
        state.current = action.payload;
       })
       .addCase(login.fulfilled, (state, action) => {
        state.current = action.payload;
       })
    }
})
const { reducer } = userSlice;
export default reducer;