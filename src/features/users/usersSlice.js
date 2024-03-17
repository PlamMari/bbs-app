import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Mila P.' },
    { id: '1', name: 'Lyuba D.' },
    { id: '2', name: 'Georgi K.' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer