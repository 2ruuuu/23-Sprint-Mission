import {Route, Routes} from "react-router-dom";
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
