import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counter/counterAPI';

const initialState = {
user:null

};





export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
login : (state , action)=>{

console.log(action.payload);

state.user = action.payload.user



} , 

logout : (state) =>{
state.user = null ; 
}

  },

});

export const { login ,  logout} = userSlice.actions;

export const selectUser = state => state.user



export default userSlice.reducer;
