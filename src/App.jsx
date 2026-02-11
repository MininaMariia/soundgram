import { useState } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FeedPage from './pages/FeedPage';
import SearchPage from './pages/SearchPage';
import ProfilePage from './pages/ProfilePage';
import Navigation from './components/Navigation';
import Player from './components/Player'; 

function App() {

  const [activeTrack, setActiveTrack] = useState(null);

  return (
    <Router>
      <div style={{ paddingBottom: activeTrack ? '160px' : '70px', minHeight: '100vh', color: '#fff' }}>
      
        <Routes>
          {}
          <Route path="/" element={<FeedPage onTrackSelect={setActiveTrack} />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>

        {}
        {activeTrack && <Player track={activeTrack} onClose={() => setActiveTrack(null)} />}
        
        <Navigation />
      </div>
    </Router>
  );
}

export default App;