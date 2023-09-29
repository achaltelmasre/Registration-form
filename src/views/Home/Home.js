import React, { useState } from 'react'
import "./Home.css";

function Home () {
    const [fullName, setFullName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('female');
    const [c, setC] = useState(false);
    const [cpp, setCpp] = useState(false);
    const [java, setJava] = useState(false);
    const [html, setHtml] = useState(false);
    const [css, setCss] = useState(false);
    const [javascript, setJavascript] = useState(false);
    const [bootstrap, setBootstrap] = useState(false);


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
               checked={c}
               onChange={(e)=>{
                setC(e.target.checked);
               }}/>
                C Language <br/>

              <input type="checkbox" value="cpp" 
              checked={cpp}
              onChange={(e)=>{
                setCpp(e.target.checked);
               }}/> C++ <br/>

              <input type="checkbox" value="java" 
              checked={java}
              onChange={(e)=>{
                setJava(e.target.checked);
               }}/> Java <br/>

              <input type="checkbox" value="html" 
              checked={html}
              onChange={(e)=>{
                setHtml(e.target.checked);
               }}/>Html<br/>

              <input type="checkbox" value="css"
              checked={css} 
              onChange={(e)=>{
                setCss(e.target.checked);
               }}/>Css <br/>

              <input type="checkbox" value="javascript" 
              checked={javascript}
              onChange={(e)=>{
                setJavascript(e.target.checked);
               }}/>JavaScript<br/>

              <input type="checkbox" value="bootstrap" 
              checked={bootstrap}
              onChange={(e)=>{
                setBootstrap(e.target.checked);
               }}/>Bootsrap <br/>



            </form>
        </div>
    )
}

export default Home