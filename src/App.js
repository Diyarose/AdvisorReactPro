import logo from './logo.svg';
import './App.css';
import AddAdvisor from './components/AddAdvisor';
import SearchUser from './components/SearchUser';
import ViewAdvisor from './components/ViewAdvisor';

function App() {
  return (
    <div>
      <AddAdvisor/>
      <SearchUser/>
      <ViewAdvisor/>
    </div>
  );
}

export default App;
