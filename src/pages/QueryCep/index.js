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
import QueryCep from '../QueryCep';

const QueryObject = () => {

  const [cepData, setCepData] = useState();
  const [input, setInput] = useState({ cep: '', type: 'json' });


  const search = () => {
    const prefixUrl = 'http://cep.la/'

    axios({
      method: "get",
      url: `${prefixUrl}${input.cep}`,
      headers: { "Accept": "application/json" },
    })
      .then((response) => {
        if (response.data.length){
          setCepData(response.data)
        }else{ 
          alert('Busca por CEP indisponível')
        }
      })
  }

  const tableHead = ['CEP', 'UF', 'CIDADE', 'BAIRRO', 'LOGRADOURO'];

  const handleChange = (event) => {

    const newCode = event.target.value;
    setInput((prevState) => ({ ...prevState, cep: newCode }));
  }


  return (

    <Container maxWidth="sm">
      <input type="text" pattern="[A-Za-z]{3}" value={input.code} onChange={(event) => handleChange(event)} />

      <Button variant="outlined" color="primary" onClick={search}>Buscar</Button>
      {
        console.log(cepData)
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

          {cepData && cepData.map((obj) => (
            <TableRow>
              <TableCell>
                {obj.cep}
              </TableCell>
              <TableCell>
                {obj.uf}
              </TableCell>
              <TableCell>
                {obj.cidade}
              </TableCell>
              <TableCell>
                {obj.bairro}
              </TableCell>
              <TableCell>
                {obj.logradouro}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>


    </Container>
  );

}

export default QueryObject;
