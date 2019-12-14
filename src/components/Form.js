import React from 'react'

class Form extends React.Component {
    constructor(){
        super()
        this.state = {
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
            mouse: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if(this.props.view.page === 'addBuild') {
            this.props.handleCreate(this.state)
        } else if(this.props.view.page === 'editBuild'){
            this.props.handleUpdate(this.state)
        }
    }

    componentDidMount(){
        this.setState({
            cpu: this.props.formInputs.cpu,
            cpuCooler: this.props.formInputs.cpuCooler,
            motherboard: this.props.formInputs.motherboard,
            memory: this.props.formInputs.memory,
            storage: this.props.formInputs.storage,
            videoCard: this.props.formInputs.videoCard,
            case: this.props.formInputs.case,
            powerSupply: this.props.formInputs.powerSupply,
            os: this.props.formInputs.os,
            fan: this.props.formInputs.fan,
            monitor: this.props.formInputs.monitor,
            keyboard: this.props.formInputs.keyboard,
            mouse: this.props.formInputs.mouse

        })
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
            <label>
          name
          <input type="text" placeholder="cpu" id="cpu" value={this.state.cpu} onChange={this.handleChange}/>
        </label>
        <label>
          name
          <input type="text" placeholder="cpuCooler" id="cpuCooler" value={this.state.cpuCooler} onChange={this.handleChange}/>
        </label>
        <label>
          name
          <input type="text" placeholder="motherboard" id="motherboard" value={this.state.motherboard} onChange={this.handleChange}/>
        </label>
        <label>
          name
          <input type="text" placeholder="memory" id="memory" value={this.state.memory} onChange={this.handleChange}/>
        </label>
        <label>
          name
          <input type="text" placeholder="storage" id="storage" value={this.state.storage} onChange={this.handleChange}/>
        </label>
        <label>
          name
          <input type="text" placeholder="videoCard" id="videoCard" value={this.state.videoCard} onChange={this.handleChange}/>
        </label>
        <label>
          name
          <input type="text" placeholder="case" id="case" value={this.state.case} onChange={this.handleChange}/>
        </label>
        <label>
          name
          <input type="text" placeholder="powerSupply" id="powerSupply" value={this.state.powerSupply} onChange={this.handleChange}/>
        </label>
        <label>
          name
          <input type="text" placeholder="os" id="os" value={this.state.os} onChange={this.handleChange}/>
        </label>
        <label>
          name
          <input type="text" placeholder="fan" id="fan" value={this.state.fan} onChange={this.handleChange}/>
        </label>
        <label>
          name
          <input type="text" placeholder="monitor" id="monitor" value={this.state.monitor} onChange={this.handleChange}/>
        </label>
        <label>
          name
          <input type="text" placeholder="keyboard" id="keyboard" value={this.state.keyboard} onChange={this.handleChange}/>
        </label>
        <label>
          name
          <input type="text" placeholder="mouse" id="mouse" value={this.state.mouse} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="share"/>
        </form>
        )
    }

}

export default Form
