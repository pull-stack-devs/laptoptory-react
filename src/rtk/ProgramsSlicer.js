import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import cookie from 'react-cookies';


const api = 'http://pull-stack-laptoptory.herokuapp.com/programs';

const programs = createSlice({
    name: "programs",
    initialState: {
        programs: [],
    },
    reducers: {

        setPrograms(state, action) {
            state.programs = action.payload;
        },
    },
});




export const getRemoteData = () => async (dispatch) => {
    const data = await axios({
        method: 'get',
        url: api,
        headers: {
            'Authorization': `Bearer ${cookie.load('auth')}`
        }

    })
    dispatch(setPrograms(data.data))

}

export const updatProgram = (obj) => async (dispatch) => {
    console.log("dispatch :", obj)
    const data = await axios({
        method: 'put',
        url: api,
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookie.load('auth')}`
        },
        data:JSON.stringify(obj),

    })
    if(data.data){
      await dispatch(getRemoteData())
    }

}

export const addProgram = (obj) => async (dispatch) => { 
    const data = await axios({
        method: 'post',
        url: api,
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookie.load('auth')}`
        },
        data:JSON.stringify(obj),

    })
    if(data.data){
      await dispatch(getRemoteData())
    }

}



export const { setPrograms } = programs.actions;

export default programs.reducer;