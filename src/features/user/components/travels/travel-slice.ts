import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../../app/store';
import { APIStatus } from '../../../../shared/models/api-status';
import { Travel } from '../../../../shared/models/travel-model';
import { createNewTravel, getAllTravels } from './travel-api';

interface TravelStatus {
  status: APIStatus;
  travelStatus: 'loading' | 'success' | 'error' | 'idle';
  travelMessage: string | undefined;
  travels: Travel[];
  createTravelStatus: 'loading' | 'success' | 'error' | 'idle';
}

const STATE_NAME = 'travel';

export interface TravelResponse {
  msg: string;
  travels: Travel[];
}

export interface CreateTravelResponse {
  msg: string;
  travels: Travel;
}

const initialState: TravelStatus = {
  status: APIStatus.IDLE,
  travelStatus: 'idle',
  travelMessage: '',
  travels: [],
  createTravelStatus: 'idle',
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
export const createNewTravelAsync = createAsyncThunk(
  `${STATE_NAME}/createTravel`,
  async (form: HTMLFormElement) => {
    const newTravelForm = new FormData(form);
    const apiResponse = await createNewTravel(newTravelForm);
    const data: CreateTravelResponse = await apiResponse.json();
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
      })

      .addCase(createNewTravelAsync.pending, state => {
        state.status = APIStatus.LOADING;
        state.createTravelStatus = 'loading';
      })
      .addCase(
        createNewTravelAsync.fulfilled,
        (state, action: PayloadAction<CreateTravelResponse>) => {
          state.status = APIStatus.IDLE;
          state.createTravelStatus = 'success';
          state.travelMessage = action.payload.msg;
        },
      )
      .addCase(createNewTravelAsync.rejected, (state, action) => {
        state.status = APIStatus.ERROR;
        state.createTravelStatus = 'error';
        state.travelMessage = action.error.message;
      });
  },
});

export const selectTravels = (state: RootState) => state.travels;
export default travelSlice.reducer;
