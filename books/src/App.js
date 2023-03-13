import './App.css';
import { Route, Routes } from 'react-router-dom';
import { BookList } from './components/BookList';
import Favorite from './components/Favorite';
import Header from './components/Header';
import Footer from './components/Footer';
import  Search from './components/Search';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<BookList/>}/>
        <Route path='/Favorite' element={<Favorite/>}/>
        <Route path='/Search' elememt={<Search/>}/>
      </Routes>
      <Footer/>
     
    </div>
  );
}

export default App;
