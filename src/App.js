import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home'
import Exercise1 from './pages/Exercise1';

function App() {
  return (
    <Layout>
    <h1>Unidad 2:</h1>
      <Routes>
        <Route path="exercise-1" element={<Exercise1 />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
