import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaUser } from 'react-icons/fa'; 

function Navigation() {
  return (
    <nav style={styles.nav}>
      <Link title="Лента" to="/" style={styles.link}><FaHome size={24} /></Link>
      <Link title="Поиск" to="/search" style={styles.link}><FaSearch size={24} /></Link>
      <Link title="Профиль" to="/profile" style={styles.link}><FaUser size={24} /></Link>
    </nav>
  );
}



const styles = {
  nav: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: '60px',
    backgroundColor: '#111', 
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTop: '1px solid #000000'
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  }
};

export default Navigation;