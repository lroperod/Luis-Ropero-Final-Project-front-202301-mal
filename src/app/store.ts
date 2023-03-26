import {
  configureStore,
  ThunkAction,
  Action,
  PreloadedState,
  combineReducers,
} from '@reduxjs/toolkit';
import userReducer from '../features/user/user-slice';
import travelReducer from '../features/user/components/travels/travel-slice';
export const store = configureStore({
  reducer: {
    user: userReducer,
    travels: travelReducer,
  },
});

const rootReducer = combineReducers({
  user: userReducer,
  travels: travelReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
