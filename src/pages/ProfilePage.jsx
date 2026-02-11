import { useState } from 'react';

function ProfilePage() {
  const userData = {
    username: "@Cpacitik",
    fullName: "Маша Минина",
    avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    stats: {
      followers: 123,
      following: 4,
      tracks: 42
    }
  };

  const [isFollowed, setIsFollowed] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);
  const followingList = ["Kriper2004", "Jeffrey Epstein", "Nogotochki_krasnodar", "Danil_kolbasenko"];

  return (
    <div style={styles.container}>
      {}
      <div style={styles.header}>
        <div style={styles.avatarContainer}>
          <img 
            src={userData.avatar} 
            alt="avatar" 
            style={styles.avatarImg} 
          />
        </div>
        <h2 style={styles.username}>{userData.username}</h2>
        <p style={styles.fullName}>{userData.fullName}</p>
      </div>

      {}
      <div style={styles.statsContainer}>
        <div style={styles.statItem}>
          <span style={styles.statNumber}>{userData.stats.followers}</span>
          <span style={styles.statLabel}>Подписчики</span>
        </div>
        
        <div 
          style={{ ...styles.statItem, cursor: 'pointer' }} 
          onClick={() => setShowFollowing(!showFollowing)}
        >
          <span style={styles.statNumber}>{userData.stats.following}</span>
          <span style={styles.statLabel}>Подписки</span>
        </div>

        <div style={styles.statItem}>
          <span style={styles.statNumber}>{userData.stats.tracks}</span>
          <span style={styles.statLabel}>Треки</span>
        </div>
      </div>

      {}
      <button 
        style={isFollowed ? styles.unfollowBtn : styles.followBtn}
        onClick={() => setIsFollowed(!isFollowed)}
      >
        {isFollowed ? 'Отписаться' : 'Подписаться'}
      </button>

      {}
      {showFollowing && (
        <div style={styles.followingBox}>
          <h4 style={{ marginBottom: '12px', fontSize: '14px' }}>Список подписок:</h4>
          {followingList.map((user, index) => (
            <div key={index} style={styles.followingUser}>
              {user}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '30px 20px',
    textAlign: 'center',
    minHeight: '100vh',
    color: '#fff'
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
  header: {
    marginBottom: '30px',
  },
  avatarContainer: {
    width: '90px',
    height: '90px',
    borderRadius: '50%',
    margin: '0 auto 15px',
    overflow: 'hidden',
    border: '2px solid #333'
  },
  avatarImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  username: {
    fontSize: '22px',
    fontWeight: '800', 
    margin: '0',
  },
  fullName: {
    color: '#888',
    fontSize: '14px',
    marginTop: '5px',
  },
  statsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '25px',
    backgroundColor: '#111',
    padding: '20px 10px',
    borderRadius: '15px',
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  statNumber: {
    fontSize: '18px',
    fontWeight: '800',
  },
  statLabel: {
    fontSize: '12px',
    color: '#888',
    letterSpacing: '0.5px'
  },
  followBtn: {
    width: '100%',
    padding: '14px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: '#fff',
    color: '#000',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    transition: '0.2s'
  },
  unfollowBtn: {
    width: '100%',
    padding: '14px',
    borderRadius: '10px',
    border: '1px solid #444',
    backgroundColor: 'transparent',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
  },
  followingBox: {
    marginTop: '20px',
    textAlign: 'left',
    backgroundColor: '#111',
    padding: '15px',
    borderRadius: '12px',
    border: '1px solid #222'
  },
  followingUser: {
    padding: '10px 0',
    borderBottom: '1px solid #222',
    color: '#ccc',
    fontSize: '14px'
  }
};

export default ProfilePage;