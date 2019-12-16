import React from 'react'
import Form from './Form.js'

class Build extends React.Component {
    render (){
        return (
            <article>
            <Form />
            <div className="build-header">
            <h1>{this.props.buildData.name}</h1>
            </div>
            <div className="build-body">
            {this.props.buildData}
            </div>
            <div className="build-options">
            <ul>
            <li onClick={() => {this.props.handleView('editBuild', this.props.postData)}}>edit build</li>
            <li onClick={() => {this.props.handleDelete(this.props.postData.id)}}>Delete Build</li>
            </ul>
            </div>
            </article>
        )
    }
}

export default Build
