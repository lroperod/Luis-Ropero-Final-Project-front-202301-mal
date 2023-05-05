import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../../app/store';
import { APIStatus } from '../../../../shared/models/api-status';
import { Travel } from '../../../../shared/models/travel-model';
import {
  createNewTravel,
  deleteTravelById,
  getTravelById,
  getTravelsByEmailCreator,
} from './travel-api';

interface TravelStatus {
  status: APIStatus;
  travelStatus: 'loading' | 'success' | 'error' | 'idle';
  travelMessage: string | undefined;
  travels: Travel[];
  travel: Travel;
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

export interface DeleteTravelResponse {
  msg: string;
}

const initialState: TravelStatus = {
  status: APIStatus.IDLE,
  travelStatus: 'idle',
  travelMessage: '',
  travels: [],
  travel: {
    continent: '',
    travelImage: '',
    userName: '',
    _id: '',
    userAssociatedVaccines: [
      {
        nameVaccines: '',
        stateVaccines: false,
      },
    ],
    travelAssociatedVaccines: [
      {
        nameVaccines: '',
        stateVaccines: false,
      },
    ],
  },
  createTravelStatus: 'idle',
};

export const getTravelsByEmailCreatorAsync = createAsyncThunk(
  `${STATE_NAME}/getByUserIdTravels`,
  async (userEmail: string) => {
    const apiResponse = await getTravelsByEmailCreator(userEmail);
    const data: TravelResponse = await apiResponse.json();
    if (!apiResponse.ok) {
      throw new Error(data.msg);
    }

    return data;
  },
);

export const getTravelByIdAsync = createAsyncThunk(
  `${STATE_NAME}/getTravelById`,
  async (id: string) => {
    const apiResponse = await getTravelById(id);
    const data: CreateTravelResponse = await apiResponse.json();
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

export const deleteTravelByIdAsync = createAsyncThunk(
  `${STATE_NAME}/deleteTravelById`,
  async (id: string) => {
    const apiResponse = await deleteTravelById(id);
    const data: DeleteTravelResponse = await apiResponse.json();
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

      .addCase(getTravelsByEmailCreatorAsync.pending, state => {
        state.status = APIStatus.LOADING;
        state.travelStatus = 'loading';
      })
      .addCase(
        getTravelsByEmailCreatorAsync.fulfilled,
        (state, action: PayloadAction<TravelResponse>) => {
          state.status = APIStatus.IDLE;
          state.travelStatus = 'success';
          state.travelMessage = action.payload.msg;
          state.travels = action.payload.travels;
        },
      )
      .addCase(getTravelsByEmailCreatorAsync.rejected, (state, action) => {
        state.status = APIStatus.ERROR;
        state.travelStatus = 'error';
        state.travelMessage = action.error.message;
      })
      .addCase(getTravelByIdAsync.pending, state => {
        state.status = APIStatus.LOADING;
        state.travelStatus = 'loading';
      })
      .addCase(
        getTravelByIdAsync.fulfilled,
        (state, action: PayloadAction<CreateTravelResponse>) => {
          state.status = APIStatus.IDLE;
          state.travelStatus = 'success';
          state.travelMessage = action.payload.msg;
          state.travel = action.payload.travels;
        },
      )
      .addCase(getTravelByIdAsync.rejected, (state, action) => {
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
      })

      .addCase(deleteTravelByIdAsync.pending, state => {
        state.status = APIStatus.LOADING;
        state.travelStatus = 'loading';
      })
      .addCase(
        deleteTravelByIdAsync.fulfilled,
        (state, action: PayloadAction<DeleteTravelResponse>) => {
          state.status = APIStatus.IDLE;
          state.travelStatus = 'success';
          state.travelMessage = action.payload.msg;
        },
      )
      .addCase(deleteTravelByIdAsync.rejected, (state, action) => {
        state.status = APIStatus.ERROR;
        state.travelStatus = 'error';
        state.travelMessage = action.error.message;
      });
  },
});

export const selectTravels = (state: RootState) => state.travels;
export default travelSlice.reducer;
