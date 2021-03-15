

const Resumen = ({datos}) => {

    // Extraer de Datos
    const {marca, year, plan } = datos; 

    if (marca === '' || year ==='' || plan ==='') return null;

    return ( 
        <>
            <h2>Resumen de Cotizacion</h2>
            <ul>
                <li>Marca: </li>
                <li>Plan: </li>
                <li>Año del auto: </li>
            </ul>
        </>
     );
}
 
export default Resumen;