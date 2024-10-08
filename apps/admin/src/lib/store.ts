import appApi from '@pims-frontend/apis/lib/appApi'
import { configureStore, type ConfigureStoreOptions } from '@reduxjs/toolkit'
import layoutReducer from './features/layout/layoutSlice'
import projectReducer from './features/project/projectSlice'
import userMgtReducer from '../app/(auth)/user-management/user/_query/userMgtSlice'
// import userManagementReducer from './features/user-management/userManagementSlice'

export const makeStore = (
  options?: ConfigureStoreOptions['preloadedState'] | undefined,
) => {
  return configureStore({
    reducer: {
      [appApi.reducerPath]: appApi.reducer,
      layout: layoutReducer,
      project: projectReducer,
      userMgt: userMgtReducer,
    },
    middleware: getDefaultMiddleware => [
      ...getDefaultMiddleware(),
      appApi.middleware,
    ],
    ...options,
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
