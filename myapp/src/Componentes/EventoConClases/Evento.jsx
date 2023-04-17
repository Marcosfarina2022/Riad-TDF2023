import React,{Component} from 'react';
export default class Evento extends Component{


constructor(props){
    super()
    this.state ={
        contador : 0

    }
}
sumar = () => {this.setState ({

    contador : this.state.contador +1 


})}
restar = () => {this.setState ({

    contador : this.state.contador -1 


})}

render(){

    return (

      <div>
        <h1>Evento onClick</h1>
        <h2>{this.state.contador}</h2>
        <button onClick={this.sumar} >Más</button>
        <button onClick={this.restar}>Menos</button>
      </div>
    );
}
}
