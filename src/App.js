import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Page/HomePage';
import Footer from './Page/common/footer/Footer'
import SinglePage from './Page/singlePage/SinglePage';
import Culture from './Page/culture/Culture'
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route exact path='/singlepage/:id' element={<SinglePage/>}/>
        <Route exact path='/culture' element={<Culture />}/>
   

      </Routes>

     <Footer/> 

    </div>
  );
}

export default App;
