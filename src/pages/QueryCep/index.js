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
  TextField,
} from '@material-ui/core'
import { Link } from '@reach/router';
import QueryCep from '../QueryCep';

const QueryEndress = (props) => {
  const { cep } = props

  const [addressData, setAddressData] = useState();

  const prefixUrl = 'http://cep.la/'



  useEffect(() => {

    axios({
      method: "get",
      url: `${prefixUrl}${cep}`,
      headers: { "Accept": "application/json" },
    })
      .then((response) => {
        setAddressData(response.data)
      });
  }, []);

  return (

    <Container maxWidth="sm">
      <TextField
        margin="normal"
        size="small"
        label="Bairro"
        id="outlined-name"
        variant="outlined"
        value={addressData ? addressData.bairro : ''} />

      <TextField
        margin="normal"
        size="small"
        label="Cidade"
        id="outlined-name"
        variant="outlined"
        value={addressData ? addressData.cidade : ''} />

      <TextField
        margin="normal"
        size="small"
        label="Cep"
        id="outlined-name"
        variant="outlined"
        value={addressData ? addressData.cep : ''} />

      <TextField
        margin="normal"
        size="small"
        label="Logradouro"
        id="outlined-name"
        variant="outlined"
        value={addressData ? addressData.logradouro : ''} />

      <TextField
        margin="normal"
        size="small"
        label="UF"
        id="outlined-name"
        variant="outlined"
        value={addressData ? addressData.uf : ''} />

    </Container>
  );
}
export default QueryEndress;
