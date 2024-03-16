import React from "react";
import { IItemCard, deleteItem } from "../../store/slices/itemSlice";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActions, CardContent } from "@mui/material";
import { useAppDispatch } from "../../store/hooks/hooks";
import ItemCount from "../ItemCount/ItemCount";



const ItemCard: React.FC<IItemCard> = ({ item, count }) => {
    const dispatch = useAppDispatch();
    const onDelete = (e: React.MouseEvent, id: number) => {
        dispatch(deleteItem(id));
    }
    return (
        <Card 
            raised
            key={item.id}
            sx={{
                maxWidth: 500,
                margin: "2em auto",
                padding: "0.1em",
            }}
        >
            <CardMedia    
                component="img"
                height="auto"
                image={item.photo}
                alt={"alt"}
                sx={{padding: "4px", objectFit: "contain" }}
            />
            <CardContent>
                <Typography variant="h5" component="div">{item.name_item}</Typography>
                <Typography>Стоимость: {item.price} руб</Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" color="inherit" onClick = { (e) => onDelete(e, item.id)}>Удалить</Button>
                <ItemCount count={count} id={item.id}/>
            </CardActions>
        </Card>
    );
}


export default ItemCard;