import React, { useState } from 'react'
import axios from 'axios';

function App() {
  const [packageData, setPackageData] = useState();
  const [input, setInput] = useState({ code: '', type: 'LB' });

  const search = () => {
    axios.post('https://correios.contrateumdev.com.br/api/rastreio', input)
      .then((response) => setPackageData(response.data))
  }

  const handleChange = (event) => {

    const newCode = event.target.value;
    setInput((prevState) => ({ ...prevState, code: newCode }));
  }


  return (
    <div>
      <input type="text" value={input.code} onChange={(event) => handleChange(event)} />

      <button onClick={() => search()}>Buscar</button>
      <div>
        {packageData && packageData.quantidade}
      </div>
      <div> 
        {packageData && packageData.objeto[0].evento.map((obj) => (obj.descricao))}
      </div>

    </div>
  );
}

export default App;
