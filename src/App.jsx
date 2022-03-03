 import React ,{useState, useEffect} from 'react';
 import {BrowserRouter, Route, Routes} from 'react-router-dom';
 import Navbar from "./components/Navbar";
 import Footer  from "./components/Footer"
 import Home from "./components/pages/Home";
 import Profil from "./components/pages/profil";
 
const App = () => {

    const [data,setData]=useState([]);

    const [query,setQuery]=useState('');

    async function getData(){
        const response= await fetch(`https://api.github.com/search/users?q=${query}`);
        const result =  await response.json();
        return  setData(result.items);
    }
    
    console.log(data);

     const handelSearch=(e)=>{

        if(e.key.toLowerCase()==='enter'){
            getData()
        }
        
     }








    return (

        <>
                <Navbar/>

            <input
                type="text"
                placeholder={"search users.."}
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
                onKeyPress={(e)=> handelSearch(e)}
                
            />

            <button onClick={()=>getData()}>data</button>

           <div className="main-content">
               <BrowserRouter>

                  <Routes>

                       <Route path="/" element={<Home data={data}/>}/>
                       <Route path={"/profil"} element={<Profil/>}/>
                       <Route path={"/profil/:login"} element={<Profil/>}/>
                      
                  </Routes>

               </BrowserRouter>
           </div>
                 <Footer/>
        </>
    );
};

export default App;

