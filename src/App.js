import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./component/shared/Layout";
import List from "./component/shared/List/list";
import Details from "./component/shared/NewGoals/Details";
import NotFound from "./component/shared/NotFound";
import Modal from "./component/shared/modal";
import { useContext, useEffect } from "react";
import { Context } from "./services/memory";
import { askGoals } from "./services/Orders";

function App() {
  const [, send] = useContext(Context);

  useEffect(() => {
    (async function () {
      const goals = await askGoals();
      send({ type: "colocar", goals });
    })();
  }, [send]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<List />} />
        <Route path="/list" element={<List />}>
          <Route
            path="/list/:id"
            element={
              <Modal>
                <Details></Details>
              </Modal>
            }
          />
        </Route>
        <Route path="/new" element={<Details />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
