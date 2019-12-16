import React from 'react'
import Build from './Build.js'
import Form from './Form.js'


class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            builds: []
        }
    }

    fetchBuilds = () => {
        fetch()
        .then(data => data.json())
        .then(jData => {
            this.setState({builds:jData})
        }).catch(err => console.log(err))
    }

    handleCreate = (createBuild) => {
        fetch({
            body:JSON.stringify(createBuild),
            method: 'POST',
            headers: {
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
        fetch({
            body:JSON.stringify(updateData),
            method: 'PUT',
            headers: {

            }
        })
        .then(updatedBuild => {
            this.props.handleView('home')
            this.fetchPosts()
        })
        .catch(err => console.log(err))
    }

    handleDelete = (id) => {
        fetch({
            method: 'DELETE',
            headers: {

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
            <h1> {this.props.view.pageTitle} </h1>

            {
                this.props.view.page === 'home'
                ?this.state.builds.map((postData) => (
                <Build key={postData.id}
                    buildData={postData}
                    handleView = {this.props.handleView}
                    handleDelete= {this.handleDelete} />
                ))
                :<Form
                handleCreate = {this.handleCreate}
                handleUpdate = {this.handleUpdate}
                formInputs = {this.props.formInputs}
                view = {this.props.view} />
            }

            </main>
        )
    }
}




export default Main
