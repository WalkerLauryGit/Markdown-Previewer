import React, { Component } from 'react'
import Output from './Output'
import marked from "marked";
import '../App.css';
// import Output from './Output'

marked.setOptions({breaks: true})

let placeholder = `

# Welcome to my React Markdown Previewer!

## This is an h2 heading!
### This is an h3 heading!

\`<body><h1>This is code inside backticks</h1></body> \`

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
We got **bold**...
Or _italic_.
Or **_both!_**
I can ~~cross you like kobe~~.

Check out the repo on [github](https://github.com/WalkerLauryGit)
> Block Quotes like kobe!

- I love lists.
  - Some are bulleted.
     - Some not so much.
        - But this list for sure is bulleted.

1. Numbered Lists.
2. All my homies love numbered lists 
3. But the list goes on... like the love for my homies

* We can see stuff too:

![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png)

`;

export default class TextArea extends Component {

    constructor(props){
        super(props)
        this.state = {
          preview: placeholder,
          markdown: "",
        };
    }
// link, inline code, code block, list item, image, bolded text
    handleChange(e){
        this.setState({preview: e.target.value})
    }

    render() {
        return (
            <div className="container">
                <textarea rows="25" placeholder="Enter your marked down here" value={this.state.preview} id="editor" onChange={this.handleChange.bind(this)} />
                <br/>
                <Output preview={this.state.preview}/>
            </div>
        )
    }
}
