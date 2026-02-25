import {Route, Routes} from "react-router-dom";
import "./App.css";
import ItemsPage from "./pages/ItemsPage";
import AddItemPage from "./pages/addItemPage";

function App() {
  return (
    <Routes>
      <Route path="/items" element={<ItemsPage />} />
      <Route path="/additem" element={<AddItemPage />} />
    </Routes>
  );
}

export default App;
