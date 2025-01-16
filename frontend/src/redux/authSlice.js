import { createSlice  } from "@reduxjs/toolkit";

const initialState = {
     user : null,
     loading: false,
     error: false,
     onlineUser: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoading:(state, actions) =>{
             state.loading = actions.payload
        },
        setUser: (state, actions) => {
            state.user = actions.payload
        },
        setOnlineUser: (state, actions) => {
            state.onlineUser = actions.payload
    }
    }
});

export const {setLoading, setUser, setOnlineUser } = authSlice.actions;
export default authSlice.reducer;