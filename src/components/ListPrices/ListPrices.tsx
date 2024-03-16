import React from "react";
import { useAppSelector } from "../../store/hooks/hooks";
import { Box, Typography } from "@mui/material";
import { Padding } from "@mui/icons-material";

const ListPrices = () => {
    const state = useAppSelector(state => state.items);
    let endPrice = 0;
    return(
        <Box sx={{margin: "32px 0px"}}>
            {state.items.map(value => {
                let currentPrice = value.count * value.item.price;
                endPrice += currentPrice;
                return <Typography style={{padding: "32px 0"}}>Итого {value.item.name_item}: { currentPrice }руб</Typography>
            })}
            <Typography variant="h5">Итого: {endPrice} руб</Typography>
        </Box>
    );
}

export default ListPrices;