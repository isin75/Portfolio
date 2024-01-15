import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import config from '../../config'

const baseURL = config.api

export const getDataJobs = createAsyncThunk('Data/getDataJobs', async (_, thunkAPI) => {
  try {
    const { data } = await axios(`${baseURL}jobs`)
    return data
  } catch (err) {
    return thunkAPI.rejectWithValue('Failed to retrieve the list "Jobs"')
  }
})
export const getDataProjects = createAsyncThunk('Data/getDataProjects', async (_, thunkAPI) => {
  try {
    const { data } = await axios(`${baseURL}projects`)
    return data
  } catch (err) {
    return thunkAPI.rejectWithValue('Failed to retrieve the list "Projects"')
  }
})
export const getDataSkills = createAsyncThunk('Data/getDataSkills', async (_, thunkAPI) => {
  try {
    const { data } = await axios(`${baseURL}skills`)
    return data
  } catch (err) {
    return thunkAPI.rejectWithValue('Failed to retrieve the list "Skills"')
  }
})
export const getDataTech = createAsyncThunk('Data/getDataTech', async (_, thunkAPI) => {
  try {
    const { data } = await axios(`${baseURL}tech`)
    return data
  } catch (err) {
    return thunkAPI.rejectWithValue('Failed to retrieve the list "Tech"')
  }
})

const initialState = {
  jobs: [],
  projects: [],
  skills: [],
  tech: [],
  status: null,
  error: null
}

const dataSlice = createSlice({
  name: 'Data',
  initialState,
  reducers: {},
  extraReducers: {
    [getDataJobs.pending]: (state) => {
      state.status = 'loading jobs'
      state.error = null
    },
    [getDataJobs.fulfilled]: (state, { payload: jobs }) => {
      state.status = 'resolve jobs'
      state.jobs = jobs
    },
    [getDataJobs.rejected]: (state, actions) => {
      state.status = 'error jobs'
      state.error = actions.payload
    },
    [getDataProjects.pending]: (state) => {
      state.status = 'loading projects'
      state.error = null
    },
    [getDataProjects.fulfilled]: (state, { payload: projects }) => {
      state.status = 'resolve projects'
      state.jobs = projects
    },
    [getDataProjects.rejected]: (state, actions) => {
      state.status = 'error projects'
      state.error = actions.payload
    },
    [getDataSkills.pending]: (state) => {
      state.status = 'loading skills'
      state.error = null
    },
    [getDataSkills.fulfilled]: (state, { payload: skills }) => {
      state.status = 'resolve skills'
      state.skills = skills
    },
    [getDataSkills.rejected]: (state, actions) => {
      state.status = 'error skills'
      state.error = actions.payload
    },
    [getDataTech.pending]: (state) => {
      state.status = 'loading tech'
      state.error = null
    },
    [getDataTech.fulfilled]: (state, { payload: tech }) => {
      state.status = 'resolve tech'
      state.jobs = tech
    },
    [getDataTech.rejected]: (state, actions) => {
      state.status = 'error tech'
      state.error = actions.payload
    }
  }
})

export default dataSlice.reducer

// export const {} = dataSlice.actions
