import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import PostList from './containers/postlist';
import Post from './containers/post';
import NewPost from './containers/newpost';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/testselect', {
    name: 'newpost',
    action() {
      console.log("message");

      mount(MainLayoutCtx, {
        content: () => (<NewPost/>)
      });
    }
  });
}
