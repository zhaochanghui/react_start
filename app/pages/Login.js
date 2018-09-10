import React from 'react';

import ReactDOM from 'react-dom';

import axios from 'axios'


import {BrowserRouter , Switch, Route, Redirect } from 'react-router-dom'

require("../../bootstrap/bootstrap.min.css");



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

                <div className="btn btn-danger">
                    登陆
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
        this.state = {name: 'Hello Runoob!',pwd:'pwd'};
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
            <form onSubmit={this.handleSubmit.bind(this)}>

            <input type="text" value={this.state.name} onChange={this.handleChangeName} />
            <input type="text" value={this.state.pwd} onChange={this.handleChangePwd} />
            <h4>{this.state.name}</h4>

            <input type="submit" value="提交" />
        </form>
        );
    }
}


export default Login