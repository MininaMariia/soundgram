function SearchPage() {
  return (
    <div style={styles.container}>
      {}
      <h1 style={styles.title}>Поиск</h1>
      <div style={styles.searchBox}>
        <input 
          type="text" 
          placeholder="Найти трек или артиста..." 
          style={styles.input}
        />
      </div>

      <div style={styles.placeholder}>
        <p style={styles.placeholderText}>Введите название трека, чтобы начать поиск</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    backgroundColor: 'transparent', 
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: '800',
    letterSpacing: '6px', 
    fontSize: '22px',
    textTransform: 'uppercase',
    textAlign: 'center',
    marginTop: '5px',
    marginBottom: '50px',
    color: '#fff',
    width: '100%',
  },
  searchBox: {
    width: '100%',
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '14px 20px',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    backgroundColor: 'rgba(255, 255, 255, 0.2)', 
    backdropFilter: 'blur(10px)',
    color: '#fff',
    fontSize: '16px',
    outline: 'none',
    fontFamily: "'Montserrat', sans-serif",
  },
  placeholder: {
    marginTop: '20px',
    textAlign: 'center',
    opacity: 0.5,
  },
  placeholderText: {
    fontSize: '14px',
    letterSpacing: '1px',
  }
};

export default SearchPage;