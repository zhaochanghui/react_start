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
        // fetch('http://www.blog.com/lx.php').then((res)=>{
        //     if(res.ok){
        //         res.text().then((data)=>{
        //             console.log(data);
        //         })
        //     }
        // }).catch((res)=>{
        //     console.log(res.status);
        // });

        axios.get('http://www.blog.com/lx.php')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    render() {
            return(

                <div className="container">

                    <form className="form-signin">
                        <h2 className="form-signin-heading">Please sign in</h2>
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address"
                               required="" autoFocus="" />
                            <label htmlFor="inputPassword" className="sr-only">Password</label>
                            <input type="password" id="inputPassword" className="form-control" placeholder="Password"
                                   required="" />

                                <input type="submit" className="btn btn-lg btn-primary btn-block" />Sign in
                    </form>

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


export default Login