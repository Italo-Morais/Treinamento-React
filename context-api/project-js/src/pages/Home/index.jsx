import { useContext } from "react";
import { NameContext } from "../../context";
import { Link } from "react-router-dom";

export function Home() {
  const {name} = useContext(NameContext)

  return (
    <>
      <h1>Home</h1>
      <p>{name}</p> <br />
      <Link to={'/'}>Back</Link> 
    </>
  );
}
