import React from 'react';
import Nav from './Nav'
import Home from './pages/Home';
import ReactDOM from 'react-dom';


import {BrowserRouter , Switch, Route, Redirect } from 'react-router-dom'

require("../bootstrap/bootstrap.min.css");


//import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';


class Home111 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            islogin:1
        };
    }

    render() {
        if (this.state.islogin == 1) {
            return (<Redirect to="/todos"/>);
        } else {
            return (
                <div className="btn btn-danger">
                    home,home
                </div>
            )
        };
    }
}


//
// const Home1 = ()=>(
//     <div>
//         home.home
//     </div>
// )


const Todos = ()=>(
    <div>
        Todos,Todos
    </div>
)

const StatusComponent = ()=>(
    <div>
        StatusComponent,StatusComponent
    </div>
)



const MainRoute = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/todos" component={Todos} />
        <Route path="/status" component={StatusComponent} />
        <Route path="/nav" component={Nav} />
    </Switch>
)





const App = () => (
    <div>
        <MainRoute/>
    </div>

)



ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));
