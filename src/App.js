import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/layout/Navbar';
import User from './component/users/Users';

class App extends Component
{
  
  




  render() {
    return (

      <div className='root'>
          <Navbar title="GitHubFinder" icon='fab-github'></Navbar> 
           <User></User>
    </div>


     // React.createElement('div',{className:'root'},React.createElement('h1',null,'Create Element from Create element tag'))
      /*
      <div className='root'>

        <h1>First application from React</h1>
        <h2>Second line out side from div class</h2>
        
      </div>*/
      
    );
  }
}
export default App;
