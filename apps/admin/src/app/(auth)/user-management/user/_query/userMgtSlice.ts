import { type UserDetailResDto } from '@pims-frontend/apis/lib/features/common/user/dto/response/UserDetailResDto'
import { createSlice } from '@reduxjs/toolkit'

export type userMgtState = {
  userMgtDrawer: {
    isuserMgtDrawerOpen: boolean
    seluserId: Partial<UserDetailResDto['userId']> | null
  }
}

const initialuserMgtState: userMgtState = {
  userMgtDrawer: {
    isuserMgtDrawerOpen: false,
    seluserId: null,
  },
}

const userMgtSlice = createSlice({
  name: 'userMgt',
  initialState: initialuserMgtState,
  reducers: {
    openUserMgtDrawer(state, action) {
      state.userMgtDrawer.isuserMgtDrawerOpen = true
      state.userMgtDrawer.seluserId = action.payload
    },
    closeUserMgtDrawer(state) {
      state.userMgtDrawer.isuserMgtDrawerOpen = false
      state.userMgtDrawer.seluserId = null
    },
  },
  selectors: {
    selectState: (state: userMgtState) => state,
  },
})

export const userMgtActions = userMgtSlice.actions
const userMgtReducer = userMgtSlice.reducer
export const userMgtSelectors = userMgtSlice.selectors
export default userMgtReducer
