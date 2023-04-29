import { Link } from "react-router-dom";
import { useContext } from "react"
import { ListContext } from "./context";


export function App() {
  const {inputValue, setInputValue, list, setList} = useContext(ListContext) 
  // console.log(input);

  function handleClick() {
    if(inputValue) {
      setList((prev) => [...prev, inputValue])
      setInputValue('')
    } else {
      alert('Insira os dados')
    }
  }

  return (
    <div>
      <h1>Olá</h1>
      <p></p>
      <button onClick={handleClick}>Submit</button> <br />
      <Link to={'/home'}>home</Link>

      <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)}/>
    </div>
  );
}
