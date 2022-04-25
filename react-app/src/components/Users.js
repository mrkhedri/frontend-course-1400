import React from "react";

function Users(props) {
  const formatName = user => {
    return user.firstName + ' ' + user.lastName;
  }

  const getGreeting = user => {
    if (user) {
      return <span>Hello, {formatName(user)}!</span>;
    }
    return <span>Hello, Stranger.</span>;
  }

  const user = {
    firstName: 'Mohadeseh',
    lastName: 'Khedri',
    avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png'
  };

  return (
    <div className="users">
      <div>
        <img width={100} src={user.avatarUrl} alt="user" />
      </div>

      {getGreeting(user)}
    </div>
  )
}

export default Users;
