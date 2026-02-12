import { mockTracks } from '../data/mockTracks';

function FeedPage({ onTrackSelect }) {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Лента</h1>
      
      <div style={styles.list}>
        {mockTracks.map((track) => (
          <div key={track.id} style={styles.trackCard}>
            <img src={track.cover} alt={track.title} style={styles.cover} />
            
            <div style={styles.info}>
              <div style={styles.trackTitle}>{track.title}</div>
              <div style={styles.artist}>{track.artist}</div>
            </div>

            {}
            <button style={styles.playButton} onClick={() => onTrackSelect(track)}>
              Play
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}



const styles = {
  container: {
    padding: '20px',
    backgroundColor: 'transparent',
    minHeight: '100vh',
  },
  title: {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: '800',    
    letterSpacing: '6px',  
    fontSize: '22px',  
    textTransform: 'uppercase',
    textAlign: 'center',
    marginTop: '5px',
    marginBottom: '20px',
    color: '#fff',
    width: '100%',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px', 
  },
  trackCard: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(163, 149, 196, 0.3)', 
    backdropFilter: 'blur(10px)',                
    padding: '10px',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.1)', 
  },
  cover: {
    width: '50px',
    height: '50px',
    borderRadius: '4px',
    marginRight: '15px',
    objectFit: 'cover',
  },
  info: {
    flex: 1, 
  },
  trackTitle: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#fff',
  },
  artist: {
    fontSize: '14px',
    color: '#888',
  },
  playButton: {
    backgroundColor: '#fff',
    border: 'none',
    borderRadius: '20px',
    padding: '8px 15px',
    fontWeight: 'bold',
    cursor: 'pointer',
  }
};

export default FeedPage;