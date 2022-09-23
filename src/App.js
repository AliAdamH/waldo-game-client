import './App.css';
import Home from './components/home/Home';
import { Routes, Route } from 'react-router-dom';
import ImageList from './components/ImageList/ImageList';
import Image from './components/Image/Image';
function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/images" element={<ImageList />} />
        <Route path="/images/:id" element={<Image />} />
      </Routes>
    </>
  );
}

export default App;
