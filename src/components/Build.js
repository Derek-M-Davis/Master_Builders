import React from 'react'

class Build extends React.Component {
    render (){
        return (
            <article>
                {/* <div className="build-header">
                <h1>{this.props.buildData.name}</h1>
                </div> */}
                <div className="build-body">
                {this.props.buildData}
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
