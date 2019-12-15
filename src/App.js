import React from 'react';
import logo from './logo.svg';
import './App.css';

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
            cpuCooler: buildData.cpuCooler,
            motherboard: buildData.motherboard,
            memory: buildData.memory,
            storage: buildData.storage,
            videoCard: buildData.videoCard,
            case: buildData.case,
            powerSupply: buildData.powerSupply,
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
            <h1> Hello World! </h1>
            <Main
            view={this.state.view}
            handleView = {this.handleView}
            // formInputs {this.state.formInputs}
            />
            </div>
        )
    }
}

// function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
// );
// }
// }

export default App;
