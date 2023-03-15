import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Settings } from '../../Pages';

const Routes = () => {
   return (
      <>
         <Router>
            <Switch>
               {/* Settings */}
               <Route path='/setting'>
                  <Settings />
               </Route>

               {/* Home */}
               <Route path='/'>
                  <Home />
               </Route>
            </Switch>
         </Router>
      </>
   );
};

export default Routes;
