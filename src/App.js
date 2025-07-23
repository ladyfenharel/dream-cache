import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/Home"
import Journal from './components/Journal';
import Detail from './components/Detail';


function App() {
  return (
    <div className="bg-background min-h-screen text-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}
export default App;
