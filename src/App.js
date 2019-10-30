import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/layout/Navbar';
import User from './component/users/Users';
import axios from 'axios'

class App extends Component
{
  state={
     users:[],
     loading:false
  }
   async componentDidMount(){
     this.setState({loading:true})
     const res=await axios.get("https://api.github.com/repos/git/git/contributors");
     console.log(res.data);
     this.setState({users:res.data,loading:false});
   }





  render() {
    return (

      <div className='root'>
          <Navbar title="GitHubFinder" icon='fab-github'></Navbar> 
           <User loading={this.state.loading} users={this.state.users}></User>
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
