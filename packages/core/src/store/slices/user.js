import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { userProfile } from '../../api/auth'

export const getUserProfile = createAsyncThunk('users/userProfile', async (_, { rejectWithValue }) => {
  try {
    const response = await userProfile()
    return response.data
  } catch (error) {
    return rejectWithValue(error)
  }
})

const initialState = {
  isFetching: false,
  error: null,
  userInfo: {}
}

// Then, handle actions in your reducers:
const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setLogout: () => initialState
  },
  extraReducers: (builder) => {
    builder.addCase(getUserProfile.pending, (state) => {
      state.isFetching = true
    })
    builder.addCase(getUserProfile.fulfilled, (state, { payload }) => {
      state.userInfo = payload
      state.isFetching = false
    })
    builder.addCase(getUserProfile.rejected, (state) => {
      state.error = 'error'
      state.isFetching = false
    })
  }
})
export const {
  setLogout
} = userSlice.actions

export default userSlice.reducer
