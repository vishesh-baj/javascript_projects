import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NAvbar";
import NotesPage from "./pages/NotesPage";
import TodosPage from "./pages/TodosPage";
import HomePage from "./pages/HomePage";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/notes" element={<NotesPage />} />
      </Routes>
    </div>
  );
};


export default App;
