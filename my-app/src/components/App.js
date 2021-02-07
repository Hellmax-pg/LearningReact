import './App.css';
import UserList from './usersList/UserList';
import users from '../users';

function App() {
  return (
    <div className="App test-123">
      <h2>Hello from applications!</h2>
      <UserList users = {users}/>
    </div>
  );
}

export default App;
