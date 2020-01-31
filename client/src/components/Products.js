import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  //seeMore: {
  //marginTop: theme.spacing(3),
  //},
}));

export default function Products(props) {
  console.log(props);
  const classes = useStyles();
  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>image</TableCell>
            <TableCell>Name full</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.products.map(row => (
            <TableRow key={row.id}>
              <TableCell><img src={row.images.header} height="100" /></TableCell>
              <TableCell>{row.full_name}</TableCell>
              <TableCell>{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
