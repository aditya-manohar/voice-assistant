import React, { useEffect, useState } from 'react';
import SpeechRecognition,{useSpeechRecognition} from 'react-speech-recognition';
import {MdSend} from 'react-icons/md';
import {FaCopy} from 'react-icons/fa';
import logo from './logo.png';
import './App.css';

function App() {

  const {transcript,resetTranscript} = useSpeechRecognition();

  const camelCase = (transcript)=>
  {
    return transcript.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
  }

  
  useEffect(()=>{
    SpeechRecognition.startListening({continuous:true})
  })

  const handleSearch=()=>{
    if (transcript.toLowerCase().includes('google'))
    {
      window.open('https://www.google.com');
      resetTranscript();
    }
  
    else if (transcript.toLowerCase().includes('youtube'))
    {
      window.open('https://www.youtube.com');
      resetTranscript();
    }

    else if (transcript.toLowerCase().includes('open wikipedia'))
    {
      window.open('https://www.wikipedia.org');
      resetTranscript();
    }

    else if (transcript.toLowerCase().includes('search wikipedia for'))
    {
      window.open(`https://en.wikipedia.org/wiki/${transcript.toLowerCase().split('search wikipedia for').join('')}`);
      resetTranscript();
    }

    else if (transcript.toLowerCase().includes('who is'))
    {
      window.open(`https://en.wikipedia.org/wiki/${transcript.toLowerCase().split('who is').join('')}`);
      resetTranscript();
    }

    else if(transcript.toLowerCase().includes('songs'))
    {
      window.open(`https://www.youtube.com/results?search_query=${transcript}`);
      resetTranscript();
    }

    else if(transcript.toLowerCase().includes('playlist' || 'playlists'))
    {
      window.open(`https://www.youtube.com/results?search_query=${transcript}`);
      resetTranscript();
    }
  
    else if (transcript === ''){
      alert('Enter something !!!');
    }

    else if(transcript.toLowerCase().includes('search for'))
    {
      window.open(`https://www.google.com/search?q=${transcript.toLowerCase().split('search for').join('')}`,"my window","width=700,height=700");
      resetTranscript();
  }

  else if(transcript.toLowerCase().includes('who is the'))
    {
      window.open(`https://www.google.com/search?q=${transcript.toLowerCase().split('who is the').join('')}`,"my window","width=700,height=700");
      resetTranscript();
  }

  else if(transcript.toLowerCase().includes('what is'))
    {
      window.open(`https://www.google.com/search?q=${transcript.toLowerCase().split('what is').join('')}`,"my window","width=700,height=700");
      resetTranscript();
  }

    else{
        window.open(`https://www.google.com/search?q=${transcript}`,"my window","width=700,height=700");
        resetTranscript();
    }  

}
 
  return (
    <>

<div className='App'>

<div className='heading'>
  <div className='head' style={{fontWeight:'bold',fontSize:'2rem'}}>
    <img src={logo} alt='M-assistant' className='logo'/>
  </div>
</div>

<center>
<div className='container'>
<div className='search-text'>
    <textarea maxLength="1000" value={transcript} placeholder='Speak Something...'/>
</div>
    <button className='buttons' onClick={handleSearch}><MdSend style={{transform:'scale(1.8)', textAlign:'center'}}/></button>
    <button className='reset' onClick={resetTranscript}>Reset</button>
    <button className='buttons' onClick={() => {navigator.clipboard.writeText(transcript);
                      alert('Copied to clipboard')}}><FaCopy style={{transform:'scale(1.8)', textAlign:'center'}} /></button>
</div>
</center>
<footer>
  <p>Version : M - 2.0</p>
</footer>
</div>
    </>
  );
}

export default App;
