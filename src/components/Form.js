import React from 'react'

class Form extends React.Component {
    constructor(){
        super()
        this.state = {
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
            cpucooler: this.props.formInputs.cpucooler,
            motherboard: this.props.formInputs.motherboard,
            memory: this.props.formInputs.memory,
            storage: this.props.formInputs.storage,
            videocard: this.props.formInputs.videocard,
            case: this.props.formInputs.compcase,
            powersupply: this.props.formInputs.powersupply,
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
          CPU
          <input type="text" placeholder="Intel/AMD" id="cpu" value={this.state.cpu} onChange={this.handleChange}/>
        </label>
        <label>
          CPU Cooler
          <input type="text" placeholder="Air Cooler/Liquid Cooler" id="cpucooler" value={this.state.cpcooler} onChange={this.handleChange}/>
        </label>
        <label>
          Motherboard
          <input type="text" placeholder="Intel B/H/Z Series or AMD B/X Series " id="motherboard" value={this.state.motherboard} onChange={this.handleChange}/>
        </label>
        <label>
          Memory
          <input type="text" placeholder="Memory Capacity/Speed/CAS Latency" id="memory" value={this.state.memory} onChange={this.handleChange}/>
        </label>
        <label>
          Storage
          <input type="text" placeholder="Capacity and M.2/2.5in/3.5in Form Factor" id="storage" value={this.state.storage} onChange={this.handleChange}/>
        </label>
        <label>
          Video Card
          <input type="text" placeholder="Geforce-GTX/RTX or Radeon-RX Series " id="videocard" value={this.state.videocard} onChange={this.handleChange}/>
        </label>
        <label>
          Case
          <input type="text" placeholder="ATX/EATX/Micro ATX/Mini ITX" id="compcase" value={this.state.compcase} onChange={this.handleChange}/>
        </label>
        <label>
          Power Supply
          <input type="text" placeholder="Wattage and Rating" id="powersupply" value={this.state.powersupply} onChange={this.handleChange}/>
        </label>
        <label>
          Operating System
          <input type="text" placeholder="Windows/OSX/Linux" id="os" value={this.state.os} onChange={this.handleChange}/>
        </label>
        <label>
          Fans
          <input type="text" placeholder="Are they RGB?" id="fan" value={this.state.fan} onChange={this.handleChange}/>
        </label>
        <label>
          Monitor
          <input type="text" placeholder="Size/Resolution/Refresh Rate" id="monitor" value={this.state.monitor} onChange={this.handleChange}/>
        </label>
        <label>
          Keyboard
          <input type="text" placeholder="It better have good switches" id="keyboard" value={this.state.keyboard} onChange={this.handleChange}/>
        </label>
        <label>
          Mouse
          <input type="text" placeholder="More RGB?" id="mouse" value={this.state.mouse} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="share"/>
      </form>
    )
  }

}

export default Form
