import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import landingpage from './landingpage';
import about from './about';
import aboutme from './aboutme';
import dashboard from './dashboard';
class Main extends Component {
    render(){
        return(
            <div>
              
               
                <Route path="/home" component={landingpage}/>
                <Route path="/about" component={about}/>
                <Route path="/aboutme" component={aboutme}/>
                <Route path="/dashboard" component={dashboard}/>
                

                
            </div>
        )
    }
}
//Export The Main Component
export default Main;