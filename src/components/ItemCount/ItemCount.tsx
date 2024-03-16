import React, { FC } from "react";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Typography } from "@mui/material";
import { useAppDispatch } from "../../store/hooks/hooks";
import { decrementItem, incrementItem } from "../../store/slices/itemSlice";

interface IItemCount {
    id: number,
    count: number
}

const ItemCount: FC<IItemCount> = ({count, id}) => {
    const dispatch = useAppDispatch();
    const increment = (id: number, count: number) => {
        if (count >= 10)
            return;
        else
            dispatch(incrementItem(id));
    };
    const decrement = (id: number, count: number) => {
        if (count <= 1)
            return;
        else
            dispatch(decrementItem(id));
    }

    return (
        <div style={{display: "flex", alignItems: "center"}}>
            <IconButton onClick={() => increment(id, count)}>
                <AddIcon/>
            </IconButton>
            <Typography variant="body2">{count}</Typography>
            <IconButton onClick={() => decrement(id, count)}>
                <RemoveIcon/>
            </IconButton>
        </div>
    );   
}


export default ItemCount;