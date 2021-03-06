import React, { useState } from 'react'
import axios from 'axios';
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from '@material-ui/core'
import { Link } from '@reach/router';
import QueryCep from '../QueryAddress';

const QueryObject = () => {

  const [packageData, setPackageData] = useState();
  const [input, setInput] = useState({ code: '', type: 'LB' });

  const search = () => {

    axios.post('https://correios.contrateumdev.com.br/api/rastreio', input)
      .then((response) => {
        setPackageData(response.data)
      })
  }
  const tableHead = ['descrição', 'data', 'hora'];
  const handleChange = (event) => {

    const newCode = event.target.value;
    setInput((prevState) => ({ ...prevState, code: newCode }));
  }


  return (

    <Container maxWidth="sm">
      <input type="text" value={input.code} onChange={(event) => handleChange(event)} />

      <Button variant="outlined" color="primary" onClick={search}>Buscar</Button>


      <Table>
        <TableHead>
          <TableRow>
            {tableHead.map((row) => (
              <TableCell> {row}</TableCell>
            )
            )}
          </TableRow>
        </TableHead>

        <TableBody>

          {packageData && packageData.objeto[0].evento.map((obj) => (
            <TableRow>

              <TableCell>
                {obj.descricao}
              </TableCell>

              <TableCell>
                {obj.data}
              </TableCell>

              <TableCell>
                {obj.hora}
              </TableCell>

            </TableRow>
          ))}
        </TableBody>

      </Table>



    </Container>
  );

}

export default QueryObject;
