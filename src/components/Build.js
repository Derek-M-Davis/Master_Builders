import React from 'react'

class Build extends React.Component {
    render (){
        return (
            <article>
                 <div className="build-header">
                <h1>{this.props.buildData.id}</h1>
                </div>
                <div className="build-body">
                CPU: {this.props.buildData.cpu}
                <br />
                CPU Cooler: {this.props.buildData.cpucooler}
                <br />
                Motherboard: {this.props.buildData.motherboard}
                <br />
                Memory: {this.props.buildData.memory}
                <br />
                Storage: {this.props.buildData.storage}
                <br />
                Video Card: {this.props.buildData.videocard}
                <br />
                Case: {this.props.buildData.compcase}
                <br />
                Power Supply: {this.props.buildData.powersupply}
                <br />
                OS: {this.props.buildData.os}
                <br />
                Fan: {this.props.buildData.fan}
                <br />
                Monitor: {this.props.buildData.monitor}
                <br />
                Keyboard: {this.props.buildData.keyboard}
                <br />
                Mouse: {this.props.buildData.mouse}
                </div>
                <div className="build-options">
                    <ul>
                        <li onClick={() => {this.props.handleView('editBuild', this.props.buildData)}}>Edit Build</li>

                        <li onClick={() => {this.props.handleDelete(this.props.buildData.id)}}>Delete Build</li>
                    </ul>
                </div>
            </article>
        )
    }
}

export default Build
