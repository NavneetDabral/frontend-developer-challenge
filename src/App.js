import React,{useState} from 'react';
import './App.css';

function App() {

  let [url,setUrl]=useState("");
  let[embeddedUrl,setEmbeddedUrl]=useState("");
  let [validateMsg,setValidateMsg]=useState(""); 
  let handleUrl =(e)=>{
      setUrl(e.target.value);      
  }
  
  let validateUrl =(e)=>{
         console.log();
        let condition=/^(http(s)??:\/\/)?(www\.)?((youtube\.com\/watch\?v=)|(youtu.be\/))([a-zA-Z0-9\-_])+/.test(url);
         if(condition){
              setValidateMsg("Good Url"); 
              generateEmbededurl(url);    
         }
         else{ 
          setUrl("");      
          setValidateMsg("Bad Url try again...");
         }
  }

  let generateEmbededurl =(url)=>{

  }



  return (
    <div className="App">
      <header className="App-header">
         <input type="text" id="input" value={url} onBlur={validateUrl} onChange={handleUrl}></input>&nbsp;  
         <button>Add</button> {validateMsg}
      </header>
      
      <content>
        <div className="frame">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/XWGXimIJhGg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
        </div>
        <div className="list">
        
        </div>
      </content>
    </div>
  );
}

export default App;
