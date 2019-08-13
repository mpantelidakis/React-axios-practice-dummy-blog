import React from 'react';

// Adds router props to any component we wrap with it
// import { withRouter } from 'react-router-dom'

import './Post.css';

const post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
);

export default post;