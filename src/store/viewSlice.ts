import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IState {
  columnsCount: 3 | 5;
}

const initialState: IState = {
  columnsCount: 3,
}

const viewSlice = createSlice({
  name: 'viewSlice',
  initialState,
  reducers: {
    changeTemplate(state, action: PayloadAction<3 | 5>): void {
      state.columnsCount = action.payload;
    }
  }
});

export const {changeTemplate} = viewSlice.actions;

export default viewSlice.reducer;
