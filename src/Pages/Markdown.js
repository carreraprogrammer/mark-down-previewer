import React, { useState } from 'react';
import detective from '../Images/detective.png';
import ReactMarkdown from 'react-markdown';

export default function Markdown (){

    const [input, setInput] = useState();    

    return (
      <section id="markdown-container">
          <section id="editor-container">
            <div id="title-container">
              <h1 id="title">Put Your Markdown Below!</h1>
              <img id="detective" alt="detective" src={detective}/>
            </div>
            <textarea 
              autoFocus
              id="editor" 
              value={input} 
              onChange={ (e) => setInput(e.target.value)} 
            />
          </section>
          <ReactMarkdown className='markdown' source={input}/>
        </section>
    )
}