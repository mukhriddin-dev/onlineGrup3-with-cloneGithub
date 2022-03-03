import React,{useState,useEffect} from 'react';
  import {useParams,useNavigate} from "react-router-dom";

const Profil = () => {

      const {login}=useParams();
      const navigate=useNavigate();
        const [users,setUsers]=useState({});

      useEffect(()=>{
          fetch(`https://api.github.com/users/${login}`)
              .then(response => response.json())
              .then(result=>setUsers(result))

      },[login])
    
    console.log(users)

    return (
        <div className={"profil"}>
             <div className="card">
                 <img src={users.avatar_url} alt={login}/>
                 <p>{login}</p>
                 <p>followers: {users.followers}</p>
                 <p>following: {users.following}</p>
                 <p>public repos: {users.public_repos}</p>
             </div>

            <button className="btn" onClick={()=>navigate(-1)}> orqaga </button>

        </div>
    );
};

export default Profil;
