import styled from '@emotion/styled';

const Mensaje = styled.p`
    background-color: rgb(127,224,237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const TextoCotizacion = styled.p` 
    color: yellow;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const ResultadoCotizacion = styled.div` 
    text-align: center;
    padding: .5rem;
    border: 1px solid yellow;
    background-color: black;
    margin-top: 1rem;
    position: relative;
`;



const Resultado = ({cotizacion}) => {

    return (
        (cotizacion === 0)
         ? <Mensaje> Elige Marca, Año y Plan</Mensaje> 
         : (<ResultadoCotizacion>
                <TextoCotizacion> El Total es: $ {cotizacion} </TextoCotizacion>  
            </ResultadoCotizacion>)
            )

    
}
 
export default Resultado;