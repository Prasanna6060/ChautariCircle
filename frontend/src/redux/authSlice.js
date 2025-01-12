import { createSlice  } from "@reduxjs/toolkit";

const initialState = {
     user : null,
     loading: false,
     error: false,
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
        }
    }
});

export const {setLoading, setUser } = authSlice.actions;
export default authSlice.reducer;