import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import Box from "@mui/material/Box";
import { useAppSelector } from "../../store/hooks/hooks";

const ListItem = () => {
    const state = useAppSelector(state => state.items);

    return (
        <Box>
            { state.items.map((value) => <ItemCard item={value.item} count={value.count}/>) }
        </Box>
    );
}

export default ListItem;