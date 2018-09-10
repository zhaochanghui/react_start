import React from 'react';

import ReactDOM from 'react-dom';

import axios from 'axios'


import {BrowserRouter , Switch, Route, Redirect } from 'react-router-dom'

require("../../bootstrap/bootstrap.min.css");



class Home extends React.Component{
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
        this.request();

        if (this.state.islogin == 1) {
            alert(9999)
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


export default Home;