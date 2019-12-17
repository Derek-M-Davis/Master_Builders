import React from 'react'
import Build from './Build.js'
import Form from './Form.js'
import Aboutus from './Aboutus.js'

let baseUrl = '';
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:8888'
} else {
  baseUrl = 'https://floating-reef-72531.herokuapp.com/api';
}


class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            builds: []
        }
    }

    fetchBuilds = () => {
        fetch(`${baseUrl}/builds`)
        .then(data => data.json())
        .then(jData => {
            this.setState({builds:jData})
        }).catch(err => console.log(err))
    }


    handleCreate = (createData) => {
        fetch(`${baseUrl}/builds`,{
            body:JSON.stringify(createData),
            method: 'POST',
            headers: {
                'Accept': 'application.json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
        .then(createdBuild => {
            return createdBuild.json()
        })
        .then(jsonedBuild => {
            this.props.handleView('home')
            this.setState(prevState => {
                prevState.builds = jsonedBuild
                return { builds: prevState.builds }
            })
        })
        .catch(err => console.log(err))
    }

    handleUpdate = (updateData) => {
        fetch(`${baseUrl}/builds/${updateData.id}`,{
            body:JSON.stringify(updateData),
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
        .then(updatedBuild => {
            this.props.handleView('home')
            this.fetchBuilds()
        })
        .catch(err => console.log(err))
    }

    handleDelete = (id) => {
        fetch(`${baseUrl}/builds/${id}`,{
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
        .then(json => {
            this.setState(prevState => {
                const builds = prevState.builds.filter(build => build.id !== id)
                return {builds}
            })
        })
        .catch(err => console.log(err))
    }

    componentDidMount(){
        this.fetchBuilds()
    }

    render(){
        return(
            <main>
            <h1>{this.props.view.pageTitle}</h1>
                {
                this.props.view.page === 'home'
                ? this.state.builds.map((buildData) => (
                    <Build 
                    key={buildData.id}
                    buildData={buildData}
                    handleView = {this.props.handleView}
                    handleDelete= {this.handleDelete} 
                    />
                    )
                )
                :<Form
                handleCreate = {this.handleCreate}
                handleUpdate = {this.handleUpdate}
                formInputs = {this.props.formInputs}
                view = {this.props.view} 
                />
                }
                {
                this.props.view.page ==='aboutUs' }
                 <Aboutus view={this.props.view}
                    />
    
                
            
            </main>
        )
    }
}




export default Main
