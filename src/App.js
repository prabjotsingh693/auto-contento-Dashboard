import React from "react";
import { Route, Switch ,Redirect} from 'react-router-dom';

import Summary from './pages/summary';
import Welcome from './pages/welcome';
import ImagesDashboard from './pages/images';



function App() {
  return (
    <Switch>
          <Route path='/images' component ={ImagesDashboard}/>
          <Route path='/summary/:smid?' component ={Summary}/>
          <Route path='/' component={Welcome} exact/>
          <Redirect to="/" />
    </Switch>  
  );
}

export default App;
