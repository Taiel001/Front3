import Card from "./Componentes/Card";
import { useState } from "react";

// styles
const styleInput = {padding:'10px',borderRadius:'10px',margin:'5px'}
const styleForm = {display : 'flex',flexDirection : 'column'}
const styleDiv = {backgroundColor : 'grey',padding:'50px',borderRadius:'20px'}


function App() {
  // use states
  const [show, setShow] = useState(false)
  const [err, setErr] = useState(false)
  const [cliente, setCliente] = useState({
      nombre:    '',
      apellido:  '',
      telefono:  '',
      direccion: ''
  })

//logica de validación
  const eventoDefault = (event) => {
      event.preventDefault()
      const numRegex = /[0-9]/
      if(cliente.nombre.length >= 3 && !cliente.nombre.startsWith(" ") && cliente.telefono.length >= 6 && numRegex.test(cliente.direccion) && cliente.direccion.length >= 3 && cliente.direccion.includes(' ')){
          setShow(true)
          setErr(false)
      } else {
          setShow(false)
          setErr(true)
      }
  }

  // render de html
  return (
    <div className="App" style={styleDiv}>
      <div>
      <h1>Pedido delivery</h1>
      <form onSubmit={(eventoDefault)} style={styleForm}>
          <input style={styleInput} type="text" placeholder="Nombre" onChange={(event) => setCliente({...cliente, nombre: event.target.value})}></input>
          <input style={styleInput} type="text"  placeholder="Apellido" onChange={(event) => setCliente({...cliente, apellido: event.target.value})}></input>
          <input style={styleInput} type="number"  placeholder="Telefono" onChange={(event) => setCliente({...cliente, telefono: event.target.value})}></input>
          <input style={styleInput} type="text"  placeholder="Direccion" onChange={(event) => setCliente({...cliente, direccion: event.target.value})}></input>
          <button>Enviar</button>
      </form>
      {show && 
        <>
          <Card cliente={cliente}/> 
        </> 
      }
      {err &&
        <>
          <h4 style={{color: 'red'}}>Por favor chequea que la información sea correcta</h4>
        </>
      }
      </div>
    </div>
  )
}

export default App;
