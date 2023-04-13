import EjemploClassComponentes from '../EjemploComponentes/EjemploClassComponentes';
import EjemploFuncionalComponente from '../EjemploComponentes/EjemploFuncionalComponente';
import './MyComponente.css'
//Las Props o propiedades son objetos que se usan para pasar datos de un componente padre a un componente hijo
function MyComponente(props){
    return (
    <div className="myComponente">
        <h2>Soy el componente{props.name}</h2>
        <p>Mi función es {props.funcion}</p>
        <EjemploClassComponentes></EjemploClassComponentes>
        <EjemploFuncionalComponente></EjemploFuncionalComponente>
    </div>
    )
}
export default MyComponente;