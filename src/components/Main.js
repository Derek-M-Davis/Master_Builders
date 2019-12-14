import React from 'react'
import Build from './Build.js'
import Form from './Form.js'

class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            builds: []
        }
    }


    render(){


        return(
            <h1> Hello World! </h1>
        )
    }
}




export default Main
