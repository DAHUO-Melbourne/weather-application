import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

//https://segmentfault.com/a/1190000011863937 部署heroku后端的教程。但是不能将后端名字改成index.js，必须沿用server.js
//真正上传的backend不在这个文件夹中，在weather里和此文件夹平级的另外的backend中