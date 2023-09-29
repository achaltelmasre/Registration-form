import React, { useEffect, useState } from 'react'
import "./Home.css";

function Home () {
    const [fullName, setFullName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('female');
    // const [c, setC] = useState(false);
    // const [cpp, setCpp] = useState(false);
    // const [java, setJava] = useState(false);
    // const [html, setHtml] = useState(false);
    // const [css, setCss] = useState(false);
    // const [javascript, setJavascript] = useState(false);
    // const [bootstrap, setBootstrap] = useState(false);

    const [language, setLanguage] = useState([]);

    const [location, setLocation] = useState('bhandara');


    useEffect(() =>{
        console.log(language);
    },[language])
   
    const handleCheck = (e)=>{
        // console.log(e.target.value)
       if (e.target.checked) {
         setLanguage([...language, e.target.value]);
       }
       else{
         const indexToBeDeleted = language.indexOf(e.target.value);
         language.splice(indexToBeDeleted, 1);
         setLanguage([...language]);
       }
    }


    return (
        <div className='card'>
            <h1 className="heading">Registration Form</h1>
            <form>
             <lable>FullName : </lable>
                <input 
                   type="text"
                    placeholder="Full Name" 
                    onChange={(e)=>{
                    setFullName(e.target.value)
                   }}
                   value={fullName}
                   className='input'
                />

                <br /><br/>
                <lable>SareName : </lable>
                <input 
                   type="text"
                    placeholder="Sarname" 
                    onChange={(e)=>{
                    setLastName(e.target.value)
                   }}
                   value={lastName}
                   className='input'
                />
                <br/><br />
                <lable>Gender :</lable>
               
                <input 
                  type='radio' 
                  name="gender"
                  value="male"
                  onChange={(e)=>{
                    if (e.target.checked) {
                        setGender(e.target.value)
                    }
                  }}
                  checked={gender==="male"}
                 /> Male

                <input 
                  type='radio'
                   name="gender" 
                   value="female"
                   onChange={(e)=>{
                    if (e.target.checked) {
                        setGender(e.target.value)
                    }
                  }}
                  checked={gender==="female"}
                /> Female

              
              <h4>Programming language :</h4>
              <input type="checkbox" value="c " 
            //    checked={c}
               onChange={handleCheck}
            //     {(e)=>{
            //     // setC(e.target.checked);
            //    }}
            />
                C Language <br/>

              <input type="checkbox" value="cpp" 
            //   checked={cpp}
              onChange= {handleCheck}
            //      {(e)=>{
            //     // setCpp(e.target.checked);
            //    }}
               /> C++ <br/>

              <input type="checkbox" value="java" 
            //   checked={java}
              onChange={handleCheck}
            //   {(e)=>{
            //     // setJava(e.target.checked);
            //    }}
               /> Java <br/>

              <input type="checkbox" value="html" 
            //   checked={html}
              onChange={handleCheck}
            //     {(e)=>{
            //     // setHtml(e.target.checked);\
            //    }}
               />Html<br/>

              <input type="checkbox" value="css"
            //   checked={css} 
              onChange={handleCheck}
            //    {(e)=>{
            //     // setCss(e.target.checked);
            //    }}
               />Css <br/>

              <input type="checkbox" value="javascript" 
            //   checked={javascript}
              onChange={handleCheck}
            //   {(e)=>{
            //     // setJavascript(e.target.checked);/
            //    }}
               />JavaScript<br/>

              <input type="checkbox" value="bootstrap" 
            //   checked={bootstrap}
              onChange={handleCheck}
            //   {(e)=>{
            //     // setBootstrap(e.target.checked);
            //    }}
               />Bootsrap <br/>
                
                <h4>Location : {location} </h4>
               <select
                value={location} 
                 onChange={(e) =>{
                    setLocation(e.target.value);
                 }}>
               
                <option value="Bhandra">Bhandara</option>
                <option value="Nagpur">Nagpur</option>
                <option value="Pune">Pune</option>
                <option value="Akola">Akola</option>
                <option value="Amravti">Amravati</option>
                <option value="Godiya">Gondiya</option>

               </select>

               

            </form>
        </div>
    )
}

export default Home