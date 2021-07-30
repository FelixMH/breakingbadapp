import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Logo from './logo.svg';

import Frase from './components/Frase';

const Fixed = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;

const Contenedor = styled.div`
  display: flex;
  height: 100%;
  background-color: #007d35;
  align-items: center;
  flex-direction: column;
`;

const Boton = styled.button`
  background-color: rgb(12,92,70);  // rgb(0, 125,53)
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 1rem;
  padding: 1rem 3rem;
  font-size: 1rem;
  border: 2px solid #000;
  transition: background-size .8s ease-out;

  &:hover {
    cursor: pointer;
    background-size: 400;
  }
`;

const Img = styled.img`
  height: 50%;
  width: 100%;
  position: fixed;
`;

function App() {

  const [ frase, saveFrase ] = useState({})

  // cargar una frase
  useEffect( () => {
    APIGet()
  }, [])

  const APIGet = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    const frase = await api.json()
    saveFrase( frase[0] )
    
  }

  return (
    <>
      <Fixed>
        <Img src={Logo} alt="---" />
        <Contenedor>
          <Frase frase={frase} />
          <Boton onClick={ APIGet } > Obtener Frase </Boton>
        </Contenedor>
      </Fixed>
    </>
  );
}

export default App;
