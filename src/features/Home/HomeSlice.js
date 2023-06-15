import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import uuid from "react-uuid";

export const fetchResume = createAsyncThunk(
    'fetchResume',
    async ()=>{
        const response = await axios.get('/api')
        return response.data;
    }
)

export const createPost = createAsyncThunk(
    'createPost',
    async (data)=>{
        const postRes = await axios.post('/api',{data})
        return postRes.data
    }   
)

export const deletePost = createAsyncThunk(
    'deletePost',
    async (id)=>{
        const deletReq = await axios.delete(`/api/${id}`)
        return deletReq.data
    }
)

const initialState = {
    resume : [],
    setResume: [],
    postResume : [],
    deleteResume: [],
    viewData: [],
    loading : false,
    error: ""
}

export const homeSlice = createSlice({
    name: "allResume",
    initialState,
    reducers : {
        addPersonalDetails: (state,action)=>{
            state.setResume = [action.payload]
            console.log(state.setResume)
        },
        addAbout: (state,action)=>{
            state.setResume = [...state.setResume, action.payload]
            console.log(state.setResume)
        },
        addEducation:(state,action)=>{
            state.setResume = [...state.setResume, action.payload]
        },
        addExperience:(state,action)=>{
            state.setResume = [...state.setResume, action.payload]
        },
        addProjects:(state,action)=>{
            state.setResume = [...state.setResume, action.payload]
        },
        addSkills:(state,action)=>{
            state.setResume = [...state.setResume, action.payload]
        },
        viewData:(state,action)=>{
            state.viewData = action.payload
          
        },
        onSubmit: (state)=>{
            state.setResume = []
        }
    },
    extraReducers: {
        [fetchResume.pending]: (state)=>{
            state.loading = true
        },
        [fetchResume.fulfilled]: (state, action)=>{
            state.loading = false;
            state.resume = action.payload
            console.log(state.resume)
        },
        [fetchResume.rejected]: (state)=>{
            state.loading = true;
        },
        [createPost.pending]: (state)=>{
            state.loading = true;
        },
        [createPost.fulfilled]: (state, action)=>{
            state.loading = false;
            state.postResume =  action.payload
            console.log(state.postResume)
        },
        [createPost.rejected]: (state)=>{
            state.loading = true;
        },
        [deletePost.pending]: (state)=>{
            state.loading = true;
        },
        [deletePost.fulfilled]: (state, action)=>{
            state.loading = false;
            state.deleteResume = action.payload
            console.log(state.deleteResume)
        },
        [deletePost.rejected]: (state)=>{
            state.loading = true;
        }
    }
})
export const {addPersonalDetails,addAbout,addEducation,addExperience,addProjects,addSkills,onSubmit,viewData} = homeSlice.actions;
export default homeSlice.reducer