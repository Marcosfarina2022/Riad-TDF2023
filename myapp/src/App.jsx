import logo from './logo.svg';
import './App.css';
import Header from './Componentes/Header/Header';
import Content from './Componentes/Content/Content';
import Footer from './Componentes/Footer/Footer';
//import MyComponente from './Componentes/EjemploProps/MyComponente';
//import ComponentePadre from './Componentes/ComponentePadre/ComponentePadre';


function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>

   </div>
   //<div className="App">
    //<ComponentePadre>
      //<MyComponente name = " A "
         // funcion = "Cargar datos"
     // ></MyComponente>
     // <MyComponente name = " B "
        //  funcion = "Leer datos"
     // ></MyComponente>
     // <MyComponente name = " C "
     // funcion = "Guardar datos"
     // ></MyComponente>
      
     // </ComponentePadre>
  // </div>
  );
}

export default App;
