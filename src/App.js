import './App.css';
import { HomePage } from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component ={HomePage} />
        <Route exact path='/shop' component ={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
