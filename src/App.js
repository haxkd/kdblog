import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { Home } from './Home';
import { AddPost } from './AddPost';
import { NotFound } from './NotFound';
import { Blog } from './Blog';
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="AddPost" element={<AddPost />} />
        <Route path="blog/:slug" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />

    </>
  );
}

export default App;
