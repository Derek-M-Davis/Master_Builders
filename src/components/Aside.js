import React from 'react'

class Aside extends React.Component {
    render(){
        return(
            <aside>
                <h2>Navigate</h2>
                <p onClick={()=> {this.props.handleView('home')}}>Home</p>
                <p onClick={()=> {this.props.handleView('addBuild')}}>Add Build</p>
                <p>About Us</p>
            </aside>
        )
    }
}

export default Aside
