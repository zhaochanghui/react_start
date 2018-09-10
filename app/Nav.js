import React from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'//导入的方式跟之前有点变化

// require('../bootstrap-3.3.7-dist/css/bootstrap.css');
require("../bootstrap/bootstrap.min.css");
require("../bootstrap/dashboard.css");

const One = function() {
    return(
    <div>
        <h2>首页</h2>
    </div>
    );
};




const Two = function(){
    return (
        <div>
            <h2>我是第二页</h2>
        </div>
    );
};



const Lists = function( match )
{
    return (
        <div>
            <h3>{match.params.ListsId}</h3>
        </div>
    );
};

const List = function( match ) {
    return(
        <div>
            <h2>我是一个列表</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/我是第一个哈哈`}>
                        列表下边的第一个
                    </Link>
                </li>
                <li>
                    <Link to={`${match.url}/我是第二个呵呵`}>
                        列表下边的第二个
                    </Link>
                </li>
                <li>
                    <Link to={`${match.url}/我是第三个嘿嘿`}>
                        列表下边的第三个
                    </Link>
                </li>
            </ul>
            <Route path={`${match.url}/:ListsId`} component={Lists}/>
            <Route exact path={match.url} render={() => (
                <h3>点击上边的列表项此处显示与url地址一样的...</h3>
            )}/>
        </div>
    );
};


const Nav = function() {
    return(
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                            data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="https://v3.bootcss.com/examples/dashboard/#">Project name</a>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="https://v3.bootcss.com/examples/dashboard/#">Dashboard</a></li>
                        <li><a href="https://v3.bootcss.com/examples/dashboard/#">Settings</a></li>
                        <li><a href="https://v3.bootcss.com/examples/dashboard/#">Profile</a></li>
                        <li><a href="https://v3.bootcss.com/examples/dashboard/#">Help</a></li>
                    </ul>
                    <form className="navbar-form navbar-right">
                        <input type="text" className="form-control" placeholder="Search..." />
                    </form>
                </div>
            </div>
        </nav>

);
}



export default Nav;