import './App.css';
import Header from './Components/Header';
import Home from './Home';
import MenuTechNoInter from './MenuTechNoInter';
import MenuPaSri from './MenuPaSri';
import MenuINhauy from './MenuINhauy';
import MenuMaMa from './MenuMaMa';
import MenuNaRong from './MenuNaRong';
import MenuBillion from './MenuBillion';
import MenuItList from './MenuItList';
import MenuIYen from './MenuIYen';
import MenuPFon from './MenuPFon';
import MenuOChaNa from './MenuOChaNa';
import MenuCurry from './MenuCurry';

import Registration from './Pages/Registration';
import Login from './Pages/Login';
import ChoiceForOrder from './Pages/ChoiceForOrder';
import ChooseStore from './Pages/ChooseStore';
import OrderText from './Pages/OrderText';
import StatusOrder from './Pages/StatusOrder';
import ContectUs from './ContectUs';

//import rider side
import OrderDetail from './Pages/OrderDetail';
import YourOrder from './Pages/YourOrder';
import ReceiveOrder from './Pages/ReceiveOrder';
import RoutingOrderPage from './Pages/RoutingOrderPage';

const App = () => {
  return (
    <div className="App font-noto">
      <Header />
      {/* <Registration /> */}
      {/* <Login /> */}
      {/* <ChoiceForOrder /> */}
      {/* <ChooseStore /> */}
      {/* <ชื่อไฟล์></> */}
      <Home/>
      <MenuTechNoInter/>
      <MenuPaSri/>
      <MenuINhauy/>
      <MenuMaMa/>
      <MenuNaRong/>
      <MenuBillion/>
      <MenuItList/>
      <MenuIYen/>
      <MenuPFon/>
      <MenuOChaNa/>
      <MenuCurry/>
      {/* <Login />  */}
      {/* <ChoiceForOrder /> */}
      {/* <ChooseStore /> */}
      {/* <OrderText /> */}
      {/* <OrderDetail /> */}
      {/* <YourOrder /> */}
      <ContectUs/>
      {/* <ReceiveOrder /> */}
      {/* <RoutingOrderPage /> */}
      {/* <StatusOrder /> */}
      <StatusOrder />
    </div>
  );
}

export default App;
