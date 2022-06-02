
import './App.css';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import Chatpage from './pages/Chatpage'

function App() {
  return (
    <div className="App">
    {/* here exacct is use to  render it to the exact path and not including the homepage  */}
     <Route path ="/"  component={Homepage} exact/>
     <Route path ="/chats" component={Chatpage} />
     
    </div>
  );
}

export default App;
