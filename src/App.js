import './App.css';
import { Routes, Route} from 'react-router-dom';
import Header from "./components/headerfolder/Navbar"
import Login from './components/login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useAuth } from './context/GlobalState';
import Home from './components/home/Home';
import Checkout from "./components/checkout/Checkout"
import Payment from './components/peyment/Payment';
import Orders from "./components/orders/Orders"
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

function App() {
  const {dispatch} = useAuth()
  const stripePromise = loadStripe("pk_test_51NPMKjDoJcfQrFNDEYdJBoyLdzGJxglaq7cQMwltKA86md4iz3zxwif5Rbt8Pd0yZoNPnoclk35R977C58a1pqLZ00OlvTfMYy")
    useEffect(()=>{
      auth.onAuthStateChanged((authUser)=>{
        if(authUser){
          dispatch({
            type: "SET_USER",
            user: authUser,
          })
        }else{
          dispatch({
            type: "SET_USER",
            user: null,
          })
        }
      })
    },[dispatch])
  return (

    <div className="App">
      <Routes>
        <Route path='/'
         element={<><Header/><Home/></>}/>
         <Route path='/orders' element={<><Header/><Orders/></>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='checkout' element={<><Header/><Checkout/></>}/>
        <Route path='/payment' element={<><Header/><Elements stripe={stripePromise}><Payment/></Elements></>}/>
        <Route path='*' element={<h1>Page Not Found</h1>}/>
      </Routes>
    </div>
  );
}
export default App;
