import './App.css';
import Header from './Components/Header';
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import ChoiceForOrder from './Pages/ChoiceForOrder';
import ChooseStore from './Pages/ChooseStore';
import OrderText from './Pages/OrderText';
import StatusOrder from './Pages/StatusOrder';
import AuthNavbar from './Components/AuthNavbar';
import EditProfile from './Pages/EditProfile';
import ReceiveOrder from './Pages/ReceiveOrder';
import RoutingOrderPage from './Pages/RoutingOrderPage';

const App = () => {
  return (
    <div className="App font-noto">
      {/* <Header /> */}
      {/* <AuthNavbar /> */}
      {/* <EditProfile /> */}
      {/* <Registration /> */}
      {/* <Login />  */}
      {/* <ChoiceForOrder /> */}
      {/* <ChooseStore /> */}
      {/* <OrderText /> */}
      {/* <StatusOrder /> */}
      {/* <ReceiveOrder /> */}
      <RoutingOrderPage />
    </div>
  );
}

export default App;
