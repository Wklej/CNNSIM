import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Container, Row, Col} from 'react-bootstrap'
import '../src/index'

import TopBar from './TopBar';
import Workflow from './Workflow';

function App() {

  return (
    <div>
      <TopBar />      
      <Workflow />
    </div>

  );
}

export default App;
