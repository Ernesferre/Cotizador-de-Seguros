
import styled from '@emotion/styled';
import { useState } from 'react';

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select` 
    display: block;
    width: 100% ;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
    /* background-color: lightgrey; */
`

const InputRadio = styled.input`
    margin: 0 1rem;
`

const Boton = styled.button` 
    background-color: #00838f;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover {
        cursor: pointer;
        background-color: #26c6da;



    }
`




const Formulario = () => {

    const [ datos, guardarDatos] = useState({
        marca: '',
        year: '',
        plan: '',
    
    })

    // extraer los valores del state
    const { marca, year , plan} = datos;

    // Leer los datos del formulario y colocarlos en el state
    const obtenerInformacion = e => {
        guardarDatos ({
            ...datos,
            [e.target.name] : e.target.value
        })
    }



    return ( 
        <form>
            <Campo>
                <Label> Marca </Label>
                <Select
                    name="marca"
                    value={marca}
                    onChange={obtenerInformacion}
                
                >
                    <option value="">-- Seleccione --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>

                </Select>


            </Campo>

            <Campo>
                <Label> Año </Label>
                <Select
                    name="year"
                    value={year}
                    onChange={obtenerInformacion}
                
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>


            </Campo>

            <Campo>
                <Label>Plan </Label>
                
                <InputRadio
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan === "basico"}
                    onChange={obtenerInformacion}
                /> Basico

                <InputRadio
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === "completo"}
                    onChange={obtenerInformacion}
                /> Completo

            </Campo>

            <Boton type="button"> Cotizar </Boton>



        </form>
     );
}
 
export default Formulario;