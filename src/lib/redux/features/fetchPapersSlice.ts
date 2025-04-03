import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FetchPapersState {
  page_index: number,
  page_size: number
}

const initialState: FetchPapersState = {
  page_index: 0,
  page_size: 20
};

export const sidebarSlice = createSlice({
  name: 'fetchPapers',
  initialState,
  reducers: {
    updatePageIndex: (state, action: PayloadAction<number>) => {
      state.page_index = action.payload;
    },
  },
});

export const { updatePageIndex } = sidebarSlice.actions;

export default sidebarSlice.reducer;