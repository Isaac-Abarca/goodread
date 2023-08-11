import "./App.css";
import CatalogeBooks from "./components/BooksCataloge/CatalogeBooks";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";


function App() {
  return (
    <>
      <Navbar />
      <Search />
      <CatalogeBooks />
    </>
  );
}

export default App;
