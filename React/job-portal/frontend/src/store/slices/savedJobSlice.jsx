import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobs: []
};

const savedJobSlice = createSlice({
    name: "savedJobs",
    initialState,
    reducers: {
        saveJob: (state, action) => {
            state.jobs.push(action.payload);
        },
        removeJob: (state, action) => {
            state.jobs = state.jobs.filter((job) => job.id !== action.payload);
        }
    }
})

export const { saveJob, removeJob } = savedJobSlice.actions;

export default savedJobSlice.reducer;