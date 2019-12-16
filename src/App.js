import React from 'react';
import './App.css';
import Main from './components/Main.js';
import Aside from './components/Aside.js';

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            view: {

            },
            formInputs: {
                cpu: null,
                cpuCooler: null,
                motherboard: null,
                memory: null,
                storage: null,
                videoCard: null,
                case: null,
                powerSupply: null,
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
        let formInputs = {
            cpu: '',
            cpuCooler: '',
            motherboard: '',
            memory: '',
            storage: '',
            videoCard: '',
            case: '',
            powerSupply: '',
            os: '',
            fan: '',
            monitor: '',
            keyboard: '',
            mouse: '',
            id: null
        }


//     switch(view){
//         case 'home':
//         pageTitle = 'Pc Builder'
//         break
//         case 'addBuild':
//         pageTitle = 'Create your PC'
//         break
//         case 'editBuild':
//         pageTitle = 'Change up your build'
//         formInputs = {
//             cpu: buildData.cpu,
//             cpuCooler: buildData.cpuCooler,
//             motherboard: buildData.motherboard,
//             memory: buildData.memory,
//             storage: buildData.storage,
//             videoCard: buildData.videoCard,
//             case: buildData.case,
//             powerSupply: buildData.powerSupply,
//             os: buildData.os,
//             fan: buildData.fan,
//             monitor: buildData.monitor,
//             keyboard: buildData.keyboard,
//             mouse: buildData.mouse,
//             id: buildData.id
//         }
//         break
//         default:
//         break
//     }
//     this.setState({
//         view: {
//             page: view,
//             pageTitle: pageTitle
//         },
//         formInputs: formInputs
//     })
}
    render(){
        return(
            <div className="large-container">
            <h1> Hello World! </h1>
            <Main
            view={this.state.view}
            handleView = {this.handleView}
            formInputs = {this.state.formInputs}
            />
            <Aside />
            </div>
        )
    }

}


export default App;
