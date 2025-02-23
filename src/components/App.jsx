import './App.css';

import Profile from './Profile';
import userData from '../userData.json';

import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList />
      <TransactionHistory />
    </>
  );
}

export default App;
