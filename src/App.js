import './App.css';
import Home from './components/home/Home';
import { Routes, Route } from 'react-router-dom';
import ImageList from './components/ImageList/ImageList';
function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/images" element={<ImageList />} />
      </Routes>
    </>
  );
}

export default App;
