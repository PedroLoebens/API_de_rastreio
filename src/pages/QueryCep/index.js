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
        size="small"
        name="bairro"
        id="outlined-basic"
        variant="outlined"
        value={addressData && addressData.bairro} />

      <TextField
        size="small"
        name="bairro"
        id="outlined-basic"
        variant="outlined"
        value={addressData && addressData.bairro} />

      <TextField
        size="small"
        name="bairro"
        id="outlined-basic"
        variant="outlined"
        value={addressData && addressData.bairro} />
    </Container>
  );
}
export default QueryEndress;
