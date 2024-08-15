import "./App.css";
import Footer from "./component/shared/footer";
import Header from "./component/shared/header";
import List from "./component/shared/List/list";
// import Goal from "./component/shared/List/Goal";
import Major from "./component/shared/major";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Major>
        <List></List>
      </Major>
      <Footer></Footer>
    </div>
  );
}

export default App;
