import { useContext } from "react";
import Meta from "./Goal";
import { Context } from "../../../services/memory";
import { Outlet } from "react-router-dom";

function List() {
  const [state] = useContext(Context);
  return (
    <>
      {state.order.map((id) => (
        <Meta key={id} {...state.objects[id]}></Meta>
      ))}
      <Outlet></Outlet>
    </>
  );
}

export default List;
