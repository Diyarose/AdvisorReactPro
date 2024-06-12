import logo from './logo.svg';
import './App.css';
import AddAdvisor from './components/AddAdvisor';
import SearchUser from './components/SearchUser';
import ViewAdvisor from './components/ViewAdvisor';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddAdvisor/>}/>
    <Route path='/search' element={<SearchUser/>}/>
    <Route path='/view' element={<ViewAdvisor/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
