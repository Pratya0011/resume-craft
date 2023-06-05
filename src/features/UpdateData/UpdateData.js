import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createUpdatedPost = createAsyncThunk(
    'createPost',
    async (data)=>{
        const postRes = await axios.post('/api',{data})
        return postRes.data
    }
)

const initialState = {
  updateResume: [],
  setResume: [],
  putResume: [],
  isLoading: false,
};

export const updateDataSlice = createSlice({
  name: "updateResume",
  initialState,
  reducers: {
    updateDetails: (state, action) => {
      state.updateResume = action.payload;
      console.log(state.updateResume);
    },
    updatePersonalDetails: (state, action) => {
      state.setResume = [...state.setResume, action.payload];
    },
    updateAbout: (state, action) => {
      state.setResume = [...state.setResume, action.payload];
    },
    updateEducation: (state, action) => {
      state.setResume = [...state.setResume, action.payload];
    },
    updateExperience: (state, action) => {
      state.setResume = [...state.setResume, action.payload];
    },
    updateProjects: (state, action) => {
      state.setResume = [...state.setResume, action.payload];
    },
    updateSkills: (state, action) => {
      state.setResume = [...state.setResume, action.payload];
      console.log(state.setResume);
    },
    onSubmitUpdate: (state) => {
      state.setResume = [];
      state.updateResume=[];
    },
  },
  extraReducers: {
    [createUpdatedPost.pending]: (state)=>{
        state.loading = true;
    },
    [createUpdatedPost.fulfilled]: (state, action)=>{
        state.loading = false;
        state.postResume =  action.payload
    },
    [createUpdatedPost.rejected]: (state)=>{
        state.loading = true;
    },
  }
});

export const {
  updateDetails,
  updatePersonalDetails,
  updateAbout,
  updateEducation,
  updateExperience,
  updateProjects,
  updateSkills,
  onSubmitUpdate,
} = updateDataSlice.actions;
export default updateDataSlice.reducer;