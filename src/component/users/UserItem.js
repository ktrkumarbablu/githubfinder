import React, { Component } from 'react'

export class UserItem extends Component {

    render() {
        const {avatar_url}=this.props.user;
        return (
            <div className="card text-center">
                <img src={avatar_url} alt=""
                     className="round-img" style={{width:'60px'}}
                ></img>
            </div>
        )
    }
}

export default UserItem
