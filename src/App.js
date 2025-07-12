import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Journal from './components/Journal';
import Detail from './components/Detail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/journal" element={<Journal />} />
      <Route path="/detail/:id" element={<Detail />} />
      </Routes>
  );
}

export default App;
