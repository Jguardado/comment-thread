import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const data = [
  {
    name: "@tom",
    message: "Hey there",
    time: Date.now(),
    showReplies: false,
    replies: [
      { name: "reply tom", message: "Hey there", time: Date.now() },
      { name: "tom", message: "Hey there", time: Date.now() }
    ]
  },
  {
    name: "@tommy_lifts",
    message: "Hey second message",
    time: Date.now(),
    showReplies: false,
    replies: [
      { name: "tom", message: "Hey there", time: Date.now() },
      { name: "replytom", message: "Hey there", time: Date.now() }
    ]
  },
  {
    name: "@theRealSlimShady",
    message: "Hey third message",
    time: Date.now(),
    showReplies: false,
    replies: [
      { name: "repliertom", message: "Hey there", time: Date.now() },
      { name: "tom", message: "Hey there", time: Date.now() }
    ]
  }
];


ReactDOM.render(<App data={data} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
