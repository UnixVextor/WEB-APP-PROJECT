import './App.css';
//pichhh
import Home from './Pages/Home';
import MenuTechNoInter from './Pages/MenuTechNoInter';
import MenuPaSri from './Pages/MenuPaSri';
import MenuINhauy from './Pages/MenuINhauy';
import MenuMaMa from './Pages/MenuMaMa';
import MenuNaRong from './Pages/MenuNaRong';
import MenuBillion from './Pages/MenuBillion';
import MenuItList from './Pages/MenuItList';
import MenuIYen from './Pages/MenuIYen';
import MenuPFon from './Pages/MenuPFon';
import MenuOChaNa from './Pages/MenuOChaNa';
import MenuCurry from './Pages/MenuCurry';

//petch
import Header from './Components/Header';
import AuthNavbar from './Components/AuthNavbar';
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import EditProfile from './Pages/EditProfile';
import ChoiceForOrder from './Pages/ChoiceForOrder';
import ChooseStore from './Pages/ChooseStore';
import OrderText from './Pages/OrderText';
import StatusOrder from './Pages/StatusOrder';

//Mimi
import Review from './Pages/Review';
import ContectUs from './Pages/ContectUs';

//import rider side - Ohm
import OrderDetail from './Pages/OrderDetail';
import YourOrder from './Pages/YourOrder';
import ReceiveOrder from './Pages/ReceiveOrder';
import RoutingOrderPage from './Pages/RoutingOrderPage';

const App = () => {
  return (
    <div className="App font-noto">
      {/* Petch */}
      <Header />
      {/* <AuthNavbar /> */}
      {/* <Registration />
      <Login />
      <EditProfile />
      <ChoiceForOrder />
      <ChooseStore />
      <OrderText />
      <StatusOrder /> */}

      {/* Pichhh */}
      <Home/>
      {/* <MenuTechNoInter/>
      <MenuPaSri/>
      <MenuINhauy/>
      <MenuMaMa/>
      <MenuNaRong/>
      <MenuBillion/>
      <MenuItList/>
      <MenuIYen/>
      <MenuPFon/>
      <MenuOChaNa/>
      <MenuCurry/> */}

      {/* Mimi */}
      {/* <Review /> */}
      {/* <ContectUs/> */}

      {/* Ohm */}
      {/* <OrderDetail /> */}
      {/* <YourOrder /> */}
      {/* <ReceiveOrder /> */}
      {/* <RoutingOrderPage /> */}

    </div>
  );
}

export default App;
