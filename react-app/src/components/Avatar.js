import React from "react";

function Avatar(props) {
    return (
        <img className="Avatar"
             width={50}
             src={props.author.avatarUrl}
             alt={props.author.name}
        />
    );
}

export default Avatar;
