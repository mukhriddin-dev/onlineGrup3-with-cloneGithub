import React from 'react';
import {Link} from "react-router-dom";
const Card = (props) => {

    const {login,avatar_url}=props.user;
               console.log(login)
    return (
        <div className={"card"}>
            <img src={avatar_url} alt={login}/>
            <Link to={`/profil/${login}`}>{login}</Link>
        </div>
    );
};

export default Card;
