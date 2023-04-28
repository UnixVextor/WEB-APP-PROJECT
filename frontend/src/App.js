import './App.css';
import Header from './Components/Header';
import ReceiveOrder from './Pages/ReceiveOrder';
import OrderDetail from './Pages/OrderDetail';
import YourOrder from './Pages/YourOrder';
import RoutingOrderPage from './Pages/RoutingOrderPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App font-noto">
      <Router>
        <Header />  
        <Switch>
          <Route exact path="/receive-order" component={ReceiveOrder} />
          <Route exact path="/order-detail" component={OrderDetail} />
          <Route exact path="/adad" component={YourOrder} />
          <Route exact path="/" component={RoutingOrderPage} />
        </Switch>
      </Router>
    </div>
  );
}
  
export default App;
