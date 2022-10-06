import { Route, Routes } from "react-router";
import CreateBlog from "./components/CreateBlog";
import NavScrollExample from "./pages/Header";
import { Home } from "./pages/Home";




function App() {
  return (
    <div className="App">
      <NavScrollExample />
      <Home/>
      <Routes>
        <Route path = "/addBlog" element={<CreateBlog />}></Route>
      </Routes>
    </div>
  );
}

export default App;
