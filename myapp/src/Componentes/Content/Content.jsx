import TaskList from '../Ejemplo de lista/TaskList';
import './Content.css';
import Box from '../EjemploChildren/Box';
import Button from '../Button/Button';
import Contador from '../Contador/Contador';
import PesoDolar from '../ConversorPesosDolar/PesoDolar';
import {UserList} from '../UseEffectEjemplo/UserList';
import { EjercicioGrupalContador} from '../EjercicioGrupal/EjercicioGrupalContador';
import Evento from '../EventoConClases/Evento';


const Content = ()=>{
    return (
        <div className='Content'>
            Contenido Principal
            <Button></Button>
            <div className='foto'>
                <img src="https://media.ambito.com/p/b9a85552d9f3e00a5d125dd4c2b04f44/adjuntos/239/imagenes/040/571/0040571504/375x211/smart/inteligencia-artificial-fotazajpg.jpg" alt="IA" />
            </div>
            <Contador></Contador>
            {/*<TaskList></TaskList>*/}
            {/*En este caso El box tiene elemenos childrens por eso se cierra recien abajo*/}
            {/*<Box title="micaja">
                <h3>contenido de mi caja</h3>
            </Box>*/}{/*Acá podemos incluso meter una lista u otros componentes mas dentro del box*/}
            {/*<PesoDolar></PesoDolar>*/}
            {/*<UserList />

            {/*<EjercicioGrupalContador />*/}
            <hr />
            <Evento></Evento>
        </div>
    )
}
export default Content;