import {useState, useEffect} from 'react';

const Filtros = ({filtro, setFiltro}) => {
  return (
    <div className='filtros sombra contenedor'>
        <form >
            <div className='campo'>
                <label>Filtrar Gastos</label>
                <select
                    value={filtro}
                    onChange={e => setFiltro(e.target.value)}
                >
                    <option value=""> --Todos los Gastos--</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="hobby">Hobby</option>
                        <option value="salud">Salud</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="suscripcion">Suscripcion</option>

                </select>
            </div>
        </form>

    </div>
  )
};

export default Filtros;
