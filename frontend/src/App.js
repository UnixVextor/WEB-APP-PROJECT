import './App.css';
import Header from './Components/Header';
import Registration from './Registration';
import Login from './Login';
import ChoiceForOrder from './ChoiceForOrder';
import ChooseStore from './ChooseStore';

const App = () => {
  return (
    <div className="App font-noto">
      <Header />
      {/* <Registration /> */}
      {/* <Login /> */}
      {/* <ChoiceForOrder /> */}
      <ChooseStore />
    </div>
  );
}

export default App;
