import { useContext } from "react";
import { ListContext } from "../../context";
import { Link } from "react-router-dom";

export function Home() {
  const {list} = useContext(ListContext)

  return (
    <>
      <h1>Home</h1> <br />
      <ul>
        {list.map((list) => {
          return (
            <li>{list}</li>
          )
        })}
      </ul>
      <Link to={'/'}>Back</Link> 
    </>
  );
}
