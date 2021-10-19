
import { BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Booking from './Pages/Booking/Booking';
import Footer from './Pages/Fotter/Footer';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import PrivetRout from './Pages/Login/PrivetRout/PrivetRout';
import Register from './Pages/Login/Register/Register';

import Notfound from './Pages/Notfound/Notfound';
import Header from './Pages/Shared/Header/Header';


function App() {
  return (
    <div className="App">
 
<AuthProvider>
  <Router>
  <Header></Header>

<Switch>
<Route exact path="/">
  <Home></Home>
</Route>
<Route path="/home">
<Home></Home>
</Route>
<Route path="/login">
<Login></Login>
</Route>
<Route path="/resister">
  <Register></Register>
</Route>
<PrivetRout path="/booking/:serviceId">
<Booking></Booking>
</PrivetRout>
<Route path="*">
<Notfound></Notfound>
</Route>


</Switch>
<Footer></Footer>
</Router>
</AuthProvider>

    </div>
  );
}

export default App;
