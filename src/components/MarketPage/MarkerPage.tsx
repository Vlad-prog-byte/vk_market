import React from "react";
import { Box, Grid } from "@mui/material";
import ListItem from "../ListItem/ListItem";
import ListPrices from "../ListPrices/ListPrices";

const MarketPage = () =>{
    return (
        <Box sx={{ flexGrow: 1, width: "100%" }}>
            <Grid container spacing={0}>
                <Grid xs={9}>
                   <ListItem/>
                </Grid>
                <Grid xs={3}>
                    <ListPrices/>
                </Grid>
            </Grid>
      </Box>
    );
}

export default MarketPage;