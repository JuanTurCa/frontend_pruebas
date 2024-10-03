import { Routing } from "./router/Routing"

function App() {

  return (
    <div className="layout">
      <Routing />
    </div>
  )
}

export default App
//Porque no  esta el NavPriv en el App.jsx?
//Porque el NavPriv es un componente que se muestra en la vista privada de la aplicación,
//por lo que se carga en el componente PrivateLayout.