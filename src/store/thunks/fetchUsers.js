import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const fetchUser = createAsyncThunk( 'users/fetch', async () => {
    const respons = await axios.get('http://localhost:3005/users');

    return respons.data;
})


export {fetchUser};