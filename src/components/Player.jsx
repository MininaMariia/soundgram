function Player({ track, onClose }) {
  return (
    <div style={styles.container}>
      <button onClick={onClose} style={styles.closeButton}>✕ Закрыть плеер</button>
      
      <iframe
        frameBorder="0"
        style={styles.iframe}
        src={track.iframeUrl}
        title={track.title}
        allow="clipboard-write"
      ></iframe>
    </div>
  );
}

const styles = {
  container: {
    position: 'fixed',
    bottom: '65px', 
    left: 0,
    right: 0,
    backgroundColor: '#11184b',
    padding: '10px',
    borderTop: '1px solid #333',
    zIndex: 999,
  },
  closeButton: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    border: 'none',
    fontSize: '12px',
    marginBottom: '5px',
    cursor: 'pointer',
    width: '100%',
    textAlign: 'right'
  },
  iframe: {
    width: '100%',
    height: '100px', 
    borderRadius: '8px',
  }
};

export default Player;