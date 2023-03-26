import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../../app/store';
import { APIStatus } from '../../../../shared/models/api-status';
import { Travel } from '../../../../shared/models/travel-model';
import { getAllTravels } from './travel-api';

interface TravelStatus {
  status: APIStatus;
  travelStatus: 'loading' | 'success' | 'error' | 'idle';
  travelMessage: string | undefined;
  travels: Travel[];
}

const STATE_NAME = 'travel';

export interface TravelResponse {
  msg: string;
  travels: Travel[];
}

const initialState: TravelStatus = {
  status: APIStatus.IDLE,
  travelStatus: 'idle',
  travelMessage: '',
  travels: [],
};

export const getAllTravelsAsync = createAsyncThunk(
  `${STATE_NAME}/getAllTravels`,
  async () => {
    const apiResponse = await getAllTravels();
    const data: TravelResponse = await apiResponse.json();
    if (!apiResponse.ok) {
      throw new Error(data.msg);
    }

    return data;
  },
);

export const travelSlice = createSlice({
  name: STATE_NAME,
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllTravelsAsync.pending, state => {
        state.status = APIStatus.LOADING;
        state.travelStatus = 'loading';
      })
      .addCase(
        getAllTravelsAsync.fulfilled,
        (state, action: PayloadAction<TravelResponse>) => {
          state.status = APIStatus.IDLE;
          state.travelStatus = 'success';
          state.travelMessage = action.payload.msg;
          state.travels = action.payload.travels;
        },
      )
      .addCase(getAllTravelsAsync.rejected, (state, action) => {
        state.status = APIStatus.ERROR;
        state.travelStatus = 'error';
        state.travelMessage = action.error.message;
      });
  },
});

export const selectTravels = (state: RootState) => state.travels;
export default travelSlice.reducer;
