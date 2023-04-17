import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home'
import Exercise1 from './pages/Exercise1';
import Exercise2 from './pages/Exercise2';
import Exercise3 from './pages/Exercise3';
import Exercise4 from './pages/Exercise4';
import Exercise5 from './pages/Exercise5';
import Exercise6 from './pages/Exercise6';
import Exercise7 from './pages/Exercise7';
import Exercise8 from './pages/Exercise8';

function App() {
  return (
    <Layout>
    <h1>Unidad 2:</h1>
      <Routes>
        <Route path="exercise-1" element={<Exercise1 />} />
        <Route path="exercise-2" element={<Exercise2 />} />
        <Route path="exercise-3" element={<Exercise3 />} />
        <Route path="exercise-4" element={<Exercise4 />} />
        <Route path="exercise-5" element={<Exercise5 />} />
        <Route path="exercise-6" element={<Exercise6 />} />
        <Route path="exercise-7" element={<Exercise7 />} />
        <Route path="exercise-8" element={<Exercise8 />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
