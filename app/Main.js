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
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-3 col-md-2 sidebar">
                    <ul className="nav nav-sidebar">
                        <li className="active"><a href="https://v3.bootcss.com/examples/dashboard/#">Overview <span
                            className="sr-only">(current)</span></a></li>
                        <li><a href="https://v3.bootcss.com/examples/dashboard/#">Reports</a></li>
                        <li><a href="https://v3.bootcss.com/examples/dashboard/#">Analytics</a></li>
                        <li><a href="https://v3.bootcss.com/examples/dashboard/#">Export</a></li>
                    </ul>
                    <ul className="nav nav-sidebar">
                        <li><a href="https://v3.bootcss.com/examples/dashboard/">Nav item</a></li>
                        <li><a href="https://v3.bootcss.com/examples/dashboard/">Nav item again</a></li>
                        <li><a href="https://v3.bootcss.com/examples/dashboard/">One more nav</a></li>
                        <li><a href="https://v3.bootcss.com/examples/dashboard/">Another nav item</a></li>
                        <li><a href="https://v3.bootcss.com/examples/dashboard/">More navigation</a></li>
                    </ul>
                    <ul className="nav nav-sidebar">
                        <li><a href="https://v3.bootcss.com/examples/dashboard/">Nav item again</a></li>
                        <li><a href="https://v3.bootcss.com/examples/dashboard/">One more nav</a></li>
                        <li><a href="https://v3.bootcss.com/examples/dashboard/">Another nav item</a></li>
                    </ul>
                </div>
                <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                    <h1 className="page-header">Dashboard</h1>

                    <div className="row placeholders">

                    </div>

                    <h2 className="sub-header">Section title</h2>
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Header</th>
                                <th>Header</th>
                                <th>Header</th>
                                <th>Header</th>
                            </tr>
                            </thead>
                            <tbody>

                            <tr>
                                <td>1,015</td>
                                <td>sodales</td>
                                <td>ligula</td>
                                <td>in</td>
                                <td>libero</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

);
}



export default Nav;