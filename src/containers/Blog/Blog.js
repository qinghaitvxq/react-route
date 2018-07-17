import React, { Component } from 'react';
import axios from 'axios';
import {Route,Link} from 'react-router-dom';

// import Post from '../../components/Post/Post';
// import FullPost from './FullPost/FullPost';
// import NewPost from './NewPost/NewPost';

import Posts from './Posts/Posts';
import NewPosts from './NewPost/NewPost';

import './Blog.css';

class Blog extends Component {

    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname:'/new-post',
                                hash:'#submit',
                                search:'?quick-submit=true'
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>

                <Route path="/" exact component={Posts} />
                <Route path="/new-post" exact component={NewPosts} />


                {/*<section>*/}
                    {/*<FullPost id={this.state.selectedPostId} />*/}
                {/*</section>*/}
                {/*<section>*/}
                    {/*<NewPost />*/}
                {/*</section>*/}
            </div>
        );
    }
}

export default Blog;