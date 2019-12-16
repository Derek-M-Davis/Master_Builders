import React from 'react'

class Aside extends React.Component {
    render(){
        return(
            <aside>
                <h2>Navigate</h2>
                <h3 onClick={()=> {this.props.handleView('home')}}>Home</h3>
                <h3 onClick={()=> {this.props.handleView('addBuild')}}>Add Build</h3>
                <h3 onClick={()=> {this.props.handleView('aboutus')}}>About Us</h3>
            </aside>
        )
    }
}

export default Aside
