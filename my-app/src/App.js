import './App.css';
import GrandParent from './components/GrandParent';
import { UserProvider } from './components/userContext';

function App() {
  return (
    <div className="App">
      <UserProvider value="Nabendu">
        <GrandParent />
      </UserProvider>
    </div>
  );
}

export default App;
