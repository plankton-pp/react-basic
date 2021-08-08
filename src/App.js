import './App.css';
import Modal from './components/Modal/ModalComponent';
import Dropdown from './components/Dropdown/Dropdown';
import "../src/components/Dropdown/Dropdown.css"
/*
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
*/
function App() {
  return (
    <div className="App">
        <Modal/>
        <div className="selectRegion">
          <div className="dropdownRegion">
            <Dropdown/>
          </div>
        </div>
    </div>
  );
}

export default App;
