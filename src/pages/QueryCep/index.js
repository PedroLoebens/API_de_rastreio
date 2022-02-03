import React, { useState, useEffect } from 'react'
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
import QueryCep from '../QueryCep';

const QueryEndress = (props) => {
  const { cep } = props

  const [addressData, setAddressData] = useState();
  const [input, setInput] = useState({ endress: '', type: 'json' });

  const prefixUrl = 'http://cep.la/'
  const search = () => {

    axios({
      method: "get",
      url: `${prefixUrl}${input.address}`,
      headers: { "Accept": "application/json" },
    })
      .then((response) => {
        setAddressData(response.data)
      });

  }
 useEffect(() => {

  axios({
    method: "get",
    url: `${prefixUrl}${cep}`,
    headers: { "Accept": "application/json" },
  })
    .then((response) => {
      alert(response.data.cep)
    });
  }, []);

  const tableHead = ['CEP', 'LOCALIZAÇÂO']

  const handleChange = (event) => {

    const newCode = event.target.value;
    setInput((prevState) => ({ ...prevState, cep: newCode }));
  }


  return (

    <Container maxWidth="sm">
      <input type="text" pattern="[A-Za-z]{3}" value={input.code} onChange={(event) => handleChange(event)} />

      <Button variant="outlined" color="primary" onClick={search}>Buscar</Button>
      {
       cep
      }

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

          {addressData && addressData.map((obj) => (
            <TableRow>
              <TableCell>
                {obj.cep}
              </TableCell>
              <TableCell>
                {obj.localizacao}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>


    </Container>
  );
}
export default QueryEndress;
