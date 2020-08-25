import React from 'react'
import marked from 'marked'
export default function Output(props) {
    return (
        <div>
            <p id="preview" dangerouslySetInnerHTML={{__html: marked(props.preview)}}></p>
        </div>
    )
}
