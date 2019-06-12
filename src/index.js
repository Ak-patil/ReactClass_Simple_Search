import React, {Component} from 'react';
// import React from 'react';
import ReactDOM from 'react-dom';
import Books from './component/Books'
import Header from './component/Header'
import NewsList from './component/NewsList'


import JSON from './Db.json'
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

class App extends Component{
    constructor(){
        super()
        this.state={
            news:JSON
        }
    }

    render(){
        // console.log(this.state.news)
        return(
            <div>
                <Header/>
                <hr/>
                <  h1> My first React Code app</h1>
                
                <Books/>
                <hr/>
                <NewsList mynews={this.state.news}/>
                <hr/>
    
                </div>
    
        )
    
    }
}



ReactDOM.render(<App />, document.getElementById('root1'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
