import React, {useState} from 'react';
import Card from '../UI/Card'
const Home = (props) => {
    
    const {data=[]}=props;

     const [load,setLoad]=useState(true);

    if(data.length===0){
      return <h1>Biror narsa izlang</h1>
    }



    return (
     <>
         {
            data.map(user=> <Card user={user} key={user.id}/>)
         }
     
         
     </>
    );
};

export default Home;
