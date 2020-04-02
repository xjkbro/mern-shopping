import React, {useEffect,useContext} from 'react';
import AppNavbar from './components/AppNavbar';

import ShoppingList from './components/ShoppingList'
import {ItemList} from './context/ItemContext'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  // const [loading, setLoading] = useContext(LoadingPage)
  // useEffect(() => {
    
  // },[loading])
  
  return (
    <ItemList className="App">
      <AppNavbar />
      <ShoppingList />
    </ItemList>
  );
}

export default App;
