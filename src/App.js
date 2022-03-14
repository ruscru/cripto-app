import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './Pages/Homepage';
import './App.css';
import CoinPage from './Pages/CoinPage';
import { makeStyles } from '@material-ui/core'



function App() {

  const useStyles = makeStyles(() => ({
    App:{
      backgroundColor : '#313442',
      color : 'white',
      minHeight : '100vh',
    }
  }));

  const classes = useStyles();

  return (
      <BrowserRouter>
          <div className={classes.App}>
            <Header/>
              <Routes>
                <Route path='/' element={<Homepage/>}/>
                <Route path='/coins/:id' element={<CoinPage/>}/>
              </Routes>
          </div>      
      </BrowserRouter>         
  );
}

export default App;
