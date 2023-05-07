import React from 'react';
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list';
import "react-swipeable-list/dist/styles.css"
import { formatearFecha } from '../src/helpers';

import IconoAhorro from '../src/img/icono_ahorro.svg';
import IconoCasa from '../src/img/icono_casa.svg';
import IconoComida from '../src/img/icono_comida.svg';
import IconoGastos from '../src/img/icono_gastos.svg';
import IconoHobby from '../src/img/icono_ocio.svg';
import IconoSalud from '../src/img/icono_salud.svg';
import IconoSuscripcion from '../src/img/icono_suscripciones.svg';

const diccionarioIconos = {

    ahorro : IconoAhorro,
    comida : IconoComida,
    hobby : IconoHobby,
    salud : IconoSalud,
    casa : IconoCasa,
    gastos : IconoGastos,
    suscripcion : IconoSuscripcion
}

const Gasto = ({gasto, setGastoEditar, eliminarGasto}) => {
    const {categoria , nombre, cantidad, id, fecha} = gasto;

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setGastoEditar(gasto)}>
                EDITAR
            </SwipeAction>
        </LeadingActions>

    )
    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction 
            destructive={true}
            onClick={() => eliminarGasto(id)}>
                ELIMINAR
            </SwipeAction>

        </TrailingActions>
    )

    return (
      <SwipeableList>
        <SwipeableListItem
            leadingActions={leadingActions()}
            trailingActions={trailingActions()}
        >
            <div className='gasto sombra'>
                <div className='contenido-gasto'>
                    <img
                    src={diccionarioIconos[categoria]}
                    alt="Icono de la categoria"
                    />
                    <div className='descripcion-gasto'>
                        <p className='categoria'>{categoria}</p>
                        <p className='nombre-gasto'>{nombre}</p>
                        <p className='fecha-gasto'>
                            Agregado el: {''}
                                <span>{formatearFecha(fecha)}</span>
                        </p>
                    </div>
                </div>

                <p className='cantidad-gasto'>${cantidad}</p>
            </div>
        </SwipeableListItem>
    </SwipeableList>
    )
};

export default Gasto;
