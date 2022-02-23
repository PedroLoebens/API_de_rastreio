import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import { useFormik, Formik, Form, Field } from 'formik';
import axios from 'axios';
import {
  Container,
  TextField,
  Button,
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

  const FormDataCapture = () => {
    const formik = useFormik({
      initialValues: {
        bairro: '',
        cidade: '',
        cep: '',
        logradouro: '',
        uf: '',
      },
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      }
    })
  };
  return (
    <div>

      <Formik onSubmit={onSubmit}>

        <Form onSubmit={formik.handleSubmit}>
          <Field
            margin="normal"
            size="small"
            label="Bairro"
            id="outlined-name"
            variant="outlined"
            value={addressData ? addressData.bairro : ''} />

          <Field
            margin="normal"
            size="small"
            label="Cidade"
            id="outlined-name"
            variant="outlined"
            value={addressData ? addressData.cidade : ''} />

          <Field
            margin="normal"
            size="small"
            label="Cep"
            id="outlined-name"
            variant="outlined"
            value={addressData ? addressData.cep : ''} />

          <Field
            margin="normal"
            size="small"
            label="Logradouro"
            id="outlined-name"
            variant="outlined"
            value={addressData ? addressData.logradouro : ''} />

          <Field
            margin="normal"
            size="small"
            label="UF"
            id="outlined-name"
            variant="outlined"
            value={addressData ? addressData.uf : ''} />

          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        
    </Form>
    </Formik >
    </div >
  );
}
export default QueryEndress;