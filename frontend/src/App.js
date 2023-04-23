import './App.css';
import Header from './Components/Header';
import Registration from './Registration';
import Login from './Login';
import ChoiceForOrder from './ChoiceForOrder';

const App = () => {
  return (
    <div className="App">
      <Header />
      {/* <ChoiceForOrder /> */}
      <Registration />
      {/* <Login /> */}
    </div>
  );
}

export default App;
