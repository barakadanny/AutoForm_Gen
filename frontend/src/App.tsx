import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';
import Home from '@/pages/Home';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
