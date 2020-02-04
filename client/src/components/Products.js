import React, { useState } from "react";
//import { makeStyles } from '@material-ui/core/styles';
import {Star, StarBorder} from '@material-ui/icons'; 
import IconButton from '@material-ui/core/IconButton'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default function Products(props) {
  const [favoriteList, setFavorite] = useState([]);
  
  function addToFavorite (row) {
    const result = favoriteList.includes(row.id)? favoriteList.filter(fav => fav !== row.id): [...favoriteList, row.id];
    setFavorite(result);
  }

  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Favorite</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.products.map(row => (
            <TableRow key={row.id}>
              <TableCell><img src={row.images.header} height="100" alt={row.name} /></TableCell>
              <TableCell>{row.full_name}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>
                {row.prices ? `${Number(row.prices.price_min.amount)} ${row.prices.price_min.currency}` : '' }
              </TableCell>
              <TableCell>
                <IconButton id={row.id} onClick={()=> addToFavorite(row)}>
                  {favoriteList.includes(row.id) ? <Star /> : <StarBorder /> }
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
