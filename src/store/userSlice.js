import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    currentUser: null,
    // token: null,
    loading: false,
    error: false
}

export const fetchHotelsByCity = createAsyncThunk(
    'booking/city',
    async (destination, thunkAPI) => {
        const response = await axios.get(`http://localhost:8800/api/hotels?city=${destination}`)
        return response.data
    }
)

export const fetchHotelsById = createAsyncThunk(
    'booking/id',
    async (id, thunkAPI) => {
        const response = await axios.get(`http://localhost:8800/api/hotels/find/${id}`)
        return response.data
    }
)
export const fetchHotelRoom = createAsyncThunk(
    'booking/room',
    async (hotelId, thunkAPI) => {
        const response = await axios.get(`http://localhost:8800/api/hotels/room/${hotelId}`)
        return response.data
    }
)

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
        },
        loginSuccess: (state, action) => {
            // const { user, access_Token } = action.payload
            // state.loading = false;
            // state.token = access_Token;
            // state.currentUser = user;
            state.currentUser=action.payload;
            state.loading=false;
        },
        loginFailure: (state) => {
            state.loading = false;
            state.error = true;
        },
        logout: (state) => {
            state.currentUser = initialState;
        },
        subscription: (state, action) => {
            if (state.currentUser.subscribedUsers.includes(action.payload)) {
                state.currentUser.subscribedUsers.splice(state.currentUser.subscribedUsers.findIndex((channelId) => channelId === action.payload), 1);
            } else {
                state.currentUser.subscribedUsers.push(action.payload);
            }
        },
        persons: (state, action) => {
            state.option = action.payload;
        },
        dateRange: (state, action) => {
            state.dates = action.payload;
        }
    },
    extraReducers:
        (builder) => {
            builder.addCase(fetchHotelsByCity.fulfilled, (state, action) => {
                state.response = action.payload;
            })
            builder.addCase(fetchHotelsById.fulfilled, (state, action) => {
                state.response = action.payload;
            })
            builder.addCase(fetchHotelRoom.fulfilled, (state, action) => {
                state.response.rooms = action.payload;
            })
        }
});

export const { loginStart, loginSuccess, loginFailure, subscription, logout, persons, dateRange } = userSlice.actions
export default userSlice.reducer;