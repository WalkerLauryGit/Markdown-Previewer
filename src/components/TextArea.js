import React, { Component } from 'react'

// import Output from './Output'

export default class TextArea extends Component {

    constructor(props){
        super(props)
        this.state = {
            preview: '',
        }
    }

    handleChange(e){
        this.setState({preview: e.target.value})
    }

    render() {
        return (
            <div>
                <textarea value={this.state.preview} id="editor" onChange={this.handleChange.bind(this)} />
                {/* <Output preview={}/> */}
            </div>
        )
    }
}
