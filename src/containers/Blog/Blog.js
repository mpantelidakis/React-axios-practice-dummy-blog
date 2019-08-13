import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'

import Posts from './Posts/Posts'
import AsyncComponent from '../../hoc/asyncComponent'

/* eslint-disable import/first */
const AsyncNewPost = AsyncComponent(() => {
    return import('./NewPost/NewPost')
})

import './Blog.css';

class Blog extends Component {

    state = {
        auth: true
    }

    render () {
        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to='/posts/' 
                                exact
                                activeClassName='active'>
                                    Posts
                                </NavLink>
                            </li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>

                
                {/* Switch makes only the first route that matches load */}
                {/* Order is important! Switch left here as reference*/}
                <Switch>
                    {this.state.auth ? <Route path='/new-post' component={AsyncNewPost}/> : null}
                    <Route path='/posts/' component={Posts}/>
                    <Redirect from='/' to='/posts'/>

                    {/* Handling 404 responses */}
                    {/* Should always come last */}
                    {/* Has no point here, since we redirect everything with / prefix */}
                    <Route render={() => <h1>Not found</h1>}/>
                </Switch>
                
                
            </div>
        );
    }
}

export default Blog;