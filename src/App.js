//import logo from './logo.svg';
import Menu from './components/Menu';
import Header from './components/Header';
import Content from './components/Content';
import {details} from './data/officeDetails';
import SortHeader from './components/SortHeader';


import './App.css';


function App() {

  return (
    <div className="App">
        <Header officeDetails={details} />
        <Menu />
        <Content />
        <SortHeader />
    </div>
  );
}

export default App;
