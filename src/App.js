import { useState } from 'react';
import Header from  "./components/Header";
import Formulario from  "./components/Formulario";
import styled from '@emotion/styled';
import Resumen from  "./components/Resumen";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;



function App() {

  const [ resumen, guardarResumen ] = useState({
    cotizacion: 0,
    datos: {
      marca:'',
      year:'',
      plan:'',
    }
  });

  // extraer datos
  const { datos } = resumen;



  return (
    <Contenedor>
      <Header
        titulo="Cotizador de Seguros"
      />

      <ContenedorFormulario>

        <Formulario
          guardarResumen={guardarResumen}
        />
        <Resumen
          datos={datos}
        />
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
