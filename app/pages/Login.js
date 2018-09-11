import React from 'react';

import ReactDOM from 'react-dom';

import axios from 'axios'


import {BrowserRouter , Switch, Route, Redirect } from 'react-router-dom'

require("../../bootstrap/bootstrap.min.css");
require("../../bootstrap/signin.css");



class Login11 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            islogin:1
        };
    }

    /*
    lx.php

    <?php

header("Access-Control-Allow-Origin: *");

$rs =  ['key'=>'value1','key2'=>'value2','key3'=>'value3'];

echo json_encode($rs);


     */
    request(){


        // let config = {
        //     headers: {
        //         'Content-Type': 'multipart/form-data'
        //     }
        // }
        // axios.post('http://127.0.0.1:5000/login',  {
        //     name: 'Fred',
        //     pwd: 'Flintstone'
        // },config).then( res => {
        //     console.log(res)
        // }).catch( res => {
        //     console.log(res)
        // })


        // axios.post('http://127.0.0.1:5000/login', {
        //     name: 'Fred',
        //     lastName: 'Flintstone'
        // })

        //
        // axios({
        //     method: 'post',
        //     url: 'http://127.0.0.1:5000/login',
        //     data: {
        //         name: 'Fred',
        //         lastName: 'Flintstone'
        //     }
        // }).then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });

        const formData = new FormData();
        formData.append('name', 'tom');
        formData.append('param', 0);
        formData.append('secondParam', 0);

        axios({
            url: 'http://127.0.0.1:5000/login',
            method: 'POST',
             //data: 'name="abc"&pwd=123',
            data:formData,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error(error);
            });
    }


    render() {
        this.request();
            return(

                <div className="container">

                    {/*<form className="form-signin">*/}
                        {/*<h2 className="form-signin-heading">Please sign in</h2>*/}
                        {/*<label htmlFor="inputEmail" className="sr-only">Email address</label>*/}
                        {/*<input type="email" id="inputEmail" className="form-control" placeholder="Email address"*/}
                               {/*required="" autoFocus="" />*/}
                            {/*<label htmlFor="inputPassword" className="sr-only">Password</label>*/}
                            {/*<input type="password" id="inputPassword" className="form-control" placeholder="Password"*/}
                                   {/*required="" />*/}

                                {/*<input type="submit" className="btn btn-lg btn-primary btn-block" />Sign in*/}
                    {/*</form>*/}

                </div>
                );

    }
}


/*
onChange={v=>{this.handlechange("username",v)}}



 handlechange(key,val){
        // console.log(key,val.target.value)
        this.setState({
            [key]:val.target.value   ---要小心这个值，有时候仅仅是val就够了
        })
        // console.log(this.state)
    }


 */
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '',pwd:''};
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePwd = this.handleChangePwd.bind(this);
    }

    handleChangeName(event) {
        this.setState({name: event.target.value});
    }

    handleChangePwd(event) {
        this.setState({pwd: event.target.value});
    }

    handleSubmit(event) {
        alert('name: ' + this.state.name+"         pwd:"+this.state.pwd);
        axios.post('http://127.0.0.1:5000/login', {
            name: 'Fred',
            pwd: 'Flintstone'
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });


        event.preventDefault();
    }


    render() {
        // var value = this.state.value;
        return  (

            <div className="container">

                <form className="form-signin" onSubmit={this.handleSubmit.bind(this)}>
                    <h2 className="form-signin-heading">请登录</h2>
                    <label>username</label>
                    <input type="text" id="name" className="form-control" value={this.state.name} onChange={this.handleChangeName} />
                    <label>password</label>
                    <input type="password" id="pwd" className="form-control" value={this.state.pwd} onChange={this.handleChangePwd} />
                    <input type="submit" className="btn btn-lg btn-primary btn-block"  value="提交" />
                </form>
            </div>

        );
    }
}


export default Login11