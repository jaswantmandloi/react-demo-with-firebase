import React from 'react';

function UserDashTmpl () {
    
  return (
    <div>    
      <div>
        {JSON.stringify(this.props.userData)}
      </div>
      {this.props.loggedInUser && this.props.loggedInUser.email && <div>{this.props.loggedInUser.email}</div>}
    </div>
  )
}


export default UserDashTmpl;
