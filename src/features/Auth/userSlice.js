import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import userApi from '../../api/userApi';
import StorageKeys from '../../constants/storage-keys';
export const register = createAsyncThunk(
    'user/register',
    async (payload) => {
        //call api to register
        const res = await userApi.register(payload);
        //save data to localstorage
        localStorage.setItem(StorageKeys.TOKEN, res.data.jwt);
        localStorage.setItem(StorageKeys.USER, JSON.stringify(res.data.user));
        return res.data.user;
    },
  )
export const login = createAsyncThunk(
    'user/login',
    async (payload) => {
        //call api to register
        const res = await userApi.login(payload);
        //save data to localstorage
        localStorage.setItem(StorageKeys.TOKEN, res.data.jwt);
        localStorage.setItem(StorageKeys.USER, JSON.stringify(res.data.user));
        return res.data.user;
    },
  )

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
        settings: {},
    },
    reducers: {
        logout(state){
            //clear storage
            localStorage.removeItem(StorageKeys.USER);
            localStorage.removeItem(StorageKeys.TOKEN);
            state.current = {};
        }
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
const { reducer,actions } = userSlice;
export const {logout} = actions 
export default reducer;