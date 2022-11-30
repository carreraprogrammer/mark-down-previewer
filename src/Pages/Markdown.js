import React, { useState } from 'react';
import { marked } from "marked";
import $ from 'jquery';
import { findDOMNode } from  'react-dom';
import ReactDOM from 'react-dom';

const initialState = `
# HELLO, THIS IS AN LITTLE APPLICATION DESIGNED TO CONVERT MARKDOWN TO HTML

## I need to be honest with you...

#### I was stuck for almost 15 hours, and when I solve the problem, I realized that the problem was not related to the code.

![Sadgif](https://media0.giphy.com/media/7SF5scGB2AFrgsXP63/giphy.gif?cid=ecf05e47l1b047ojpqsah0n62qv2cs2bzl0gc3cja7eoprim&rid=giphy.gif&ct=g)

The only problem that I had, was that my initial state for testing was **#HELLO** instead of **# HELLO**. Do you see the problem???
\`<div>Inline code</div>\`

\`\`\`
const initialState = '#HELLO';
\`\`\`

### IT WAS JUST AN SPACE BETWEEN THE "#" AND THE WORD!!!

But, it's programming, you know? It's what writing code implies. Anyway, I'm really happy with this career. I'm  Carrera Programmer, and I'm planning to be the best developer that I ever dreamed of, and if you want to follow my journey, I left you the link to my GitHub profile and my LinkedIn

1. [Gihub](https://github.com/carreraprogrammer)
2. [LinkedIn](https://www.linkedin.com/in/carreraprogrammer/)

> I hope to see you later

![Sadgif](https://pbs.twimg.com/tweet_video_thumb/DIAiuVMUMAAfF8v.jpg)

`

export default function Markdown (){

    const [input, setInput] = useState(initialState);

    const changeColor = () => {
      const container = ReactDOM.findDOMNode(document.querySelector('#markdown-container'));
      const preview = ReactDOM.findDOMNode(document.querySelector('#preview'));
      const editor = ReactDOM.findDOMNode(document.querySelector('#editor'));
      const button = ReactDOM.findDOMNode(document.querySelector('#changeColor'));

      var back = ['#F3CF04', '#4AF304', '#04F38B', '#048EF3', '#4704F3', '#F304D3', '#F30406'];
      var rand = back[Math.floor(Math.random() * back.length)];
      var rand2 = back[Math.floor(Math.random() * back.length)];
      var rand3 = back[Math.floor(Math.random() * back.length)];
      $(container).css('background-color', rand);
      $(editor).css({
        border: `3px solid ${rand2}`
      });
      $(preview).css({
        border: `3px solid ${rand2}`
      });
      $(button).css({
        background: `${rand3}`,
        fontWeight: `bold`,
        color: 'white',
      })    }

    return (
      <section id="markdown-container">
          <section id="editor-container">
            <div id="title-container">
              <h1 id="title">LET'S HAVE SOME FUN!</h1>
              <button id="changeColor" onClick={changeColor}>Click For A Random Theme</button>
            </div>
            <textarea 
              id="editor" 
              value={input} 
              onChange={
                (e) => {setInput(e.target.value);
              }} 
            />
          </section>
          <div  id="preview" dangerouslySetInnerHTML={{__html: marked(input)}}></div>
      </section>
    )
}