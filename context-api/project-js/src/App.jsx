import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { NameContext } from "./context";


export function App() {
  const {name, setName} = useContext(NameContext)
  // const [name, setName] = useState('José')

  function handleClick() {
    setName('Pedro')
  }

  return (
  
    <div>
      <h1>Olá</h1>
      <p>{name}</p>
      <button onClick={handleClick}>Submit</button> <br />
      <Link to={'/home'}>home</Link>
    </div>
  );
}
