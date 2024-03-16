import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";


interface IItem {
    id: number,
    photo: string,
    name_item: string,
    price: number
}

export interface IItemCard {
    item: IItem,
    count: number
}

interface IItemsCardState {
    items: Array<IItemCard>,
    loading: boolean,
    error: string | null
}

const initialState: IItemsCardState = {
    items: [],
    loading: false,
    error: null
}





export const getItems = createAsyncThunk<IItem[], undefined, {rejectValue: string}>(
    'items/getItems', 
    async function (_, { rejectWithValue }) {
        const response = await axios.get('/api/items');
        if (response.status !== 200)
        return rejectWithValue('Ошбика Сервера!');
        else
            return response.data.data;
    }
);

export const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        deleteItem: (state, action: PayloadAction<number>) => { state.items = state.items.filter(value => value.item.id !== action.payload) },
        incrementItem: (state, action: PayloadAction<number>) => { state.items.filter(value => value.item.id === action.payload)[0].count += 1 },
        decrementItem: (state, action: PayloadAction<number>) => { state.items.filter(value => value.item.id === action.payload)[0].count -= 1 }

    },
    extraReducers: (builder) => {
        // builder.addCase(getItems.pending, (state) => {
        //     state.loading = true;
        //     state.error = null
        // }),
        builder.addCase(getItems.fulfilled, (state, action) => {
            state.items = action.payload.map(value => {
                return {
                    item: {...value},
                    count: 1
                }
            });
            state.loading = false;
        })
    }
})

export const { deleteItem, incrementItem, decrementItem } = itemsSlice.actions
export default itemsSlice.reducer;