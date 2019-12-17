import React from 'react';
import './App.css';
import Main from './components/Main.js';
import Aside from './components/Aside.js';
import Header from './components/Header.js'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            // builds: data,
            // cpu: null,
            // cpucooler: null,
            // motherboard: null,
            // memory: null,
            // storage: null,
            // videocard: null,
            // compcase: null,
            // powersupply: null,
            // os: null,
            // fan: null,
            // monitor: null,
            // keyboard: null,
            // mouse: null,
            view: {
                page: 'home',
                pageTitle: 'lkadsgf',

            },
            formInputs: {
                cpu: null,
                cpucooler: null,
                motherboard: null,
                memory: null,
                storage: null,
                videocard: null,
                compcase: null,
                powersupply: null,
                os: null,
                fan: null,
                monitor: null,
                keyboard: null,
                mouse: null,
                id: null
            }
        }
    }

    handleView = (view, buildData) => {
        let pageTitle = ''
        let formInputs = {
            cpu: '',
            cpucooler: '',
            motherboard: '',
            memory: '',
            storage: '',
            videocard: '',
            compcase: '',
            powersupply: '',
            os: '',
            fan: '',
            monitor: '',
            keyboard: '',
            mouse: '',
            id: null
        }


    switch(view){
        case 'home':
        pageTitle = 'Pc Builder'
        break
        case 'addBuild':
        pageTitle = 'Create your PC'
        break
        case 'editBuild':
        pageTitle = 'Change up your build'
        formInputs = {
            cpu: buildData.cpu,
            cpucooler: buildData.cpucooler,
            motherboard: buildData.motherboard,
            memory: buildData.memory,
            storage: buildData.storage,
            videocard: buildData.videocard,
            compcase: buildData.compcase,
            powersupply: buildData.powersupply,
            os: buildData.os,
            fan: buildData.fan,
            monitor: buildData.monitor,
            keyboard: buildData.keyboard,
            mouse: buildData.mouse,
            id: buildData.id
        }
        break
        default:
        break
    }
    this.setState({
        view: {
            page: view,
            pageTitle: pageTitle
        },
        formInputs: formInputs
    })
}
    render(){
        return(
            <div className="large-container">
              <Header />
                <div className="large-container">
                    <Aside handleView={this.handleView}/>
                    <Main
                    view={this.state.view}
                    handleView = {this.handleView}
                    formInputs = {this.state.formInputs}
                    />
                </div>
            </div>
        )
    }

}


export default App;
