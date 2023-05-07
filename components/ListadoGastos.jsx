import React from 'react';
import Gasto from './Gasto';
import { useState, useEffect } from 'react';

const ListadoGastos = ({
    gastos,
    setGastoEditar,
    eliminarGasto,
    filtro,
    gastosFiltrados
  }) => {
  
  useEffect( () => {
    if(filtro && (gastosFiltrados.length = 0)) {}
  }, [gastosFiltrados])

  return (
    <div className='listado-gastos contenedor'>

      {
        filtro ? (
          <>
          <h2>{gastosFiltrados.length ? 'Gastos' : 'No hay gastos en esta categoria'}</h2>
              {gastosFiltrados.map( gasto => (
                <Gasto
                  setGastoEditar={setGastoEditar}
                  key={gasto.id}
                  gasto={gasto}
                  eliminarGasto={eliminarGasto}
                />
              ))}
          </>
        ) : (
          <>
          <h2>{gastos.length ? 'Gastos' : 'No hay gastos aún'}</h2>
              {gastos.map( gasto => (
                <Gasto
                   setGastoEditar={setGastoEditar}
                  key={gasto.id}
                  gasto={gasto}
                  eliminarGasto={eliminarGasto}
                />
              ))}
          </>
        )
      }

    </div>
  )
};

export default ListadoGastos;
