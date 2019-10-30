import React, { Component } from 'react'

export class Navbar extends Component {
    static defaultProp={
        title:"GithubFinder",
        icon:'fab fab-github'
    };
    render() {
        return (
           <nav className='Navbar bg-primary'>
               <h1>
                   <i className={this.props.icon}>{this.props.title}</i>
               </h1>
           </nav>
        )
    }
}

export default Navbar
