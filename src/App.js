import React from 'react';
import './App.css';

class App extends React.Component{

constructor(props){
  super(props);
  this.state={
    url:"",
    embeddedUrl:"",
    validateMsg:"",
    playlist:["SlPhMPnQ58k"],
    src:"https://www.youtube.com/embed/SlPhMPnQ58k"
  }
}

  
  handleUrl =(e)=>{
      this.setState({url:e.target.value});      
  }
  generateEmbededurl =(url)=>{
    
    /*code reference  http://jsfiddle.net/isherwood/cH6e8/6 */
     console.log(url);
     var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
     var match = url.match(regExp);
     if (match && match[2].length === 11) {
        this.setState({embeddedUrl:match[2]});
     } else {
         return 'error';
     }
 
   }
  
  validateUrl =()=>{
    
        let condition=/^(http(s)??:\/\/)?(www\.)?((youtube\.com\/watch\?v=)|(youtu.be\/))([a-zA-Z0-9\-_]{11,11})+/.test(this.state.url);
         if(condition){
              this.setState({validateMsg:"Good Url"});
              this.generateEmbededurl(this.state.url);    
         }
         else{ 
         this.setState({
               validateMsg:"Bad Url try again...",
               url:"",
               embeddedUrl:""});
          }
  }


  addIntoPlaylist =()=>{
    console.log(this.state.embeddedUrl);
    if(this.state.embeddedUrl!==""){
      this.setState((state, props) => ({
        playlist: [...state.playlist,state.embeddedUrl]
      }));
    }
    
    console.log(this.state.playlist);
  }

  

  render(){
    let Items = this.state.playlist?this.state.playlist.map(item=><li>{item}</li>):null;
    let defaultSrc=this.state.src;  

   
    return (
      <div className="App">
        <header className="App-header">
           <input type="text" id="input" value={this.state.url} onBlur={this.validateUrl} onChange={this.handleUrl}></input>&nbsp;  
           <button onClick={this.addIntoPlaylist}>Add</button> <div>{this.state.validateMsg}</div>
        </header>
        
        <content>
          <div className="frame">
          <iframe width="100%" height="100%" src={defaultSrc} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="list">
          <ol>
          {
          Items 
          }

        </ol>
          </div>
        </content>
      </div>
    );



  }

 
}

export default App;
