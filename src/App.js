import * as React from 'react'
// import { Admin } from 'react-admin'
import { Admin, Resource, } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import { UserList } from './myStyle/users'
import { PostList, PostEdit, PostCreate } from './myStyle/PostList'
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './myStyle/Dashboard'
import authProvider from './myStyle/authProvider'

const  dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

const App = () => {
  return (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
      <Resource name="users" list={UserList} icon={UserIcon} />
    </Admin>
  )
}

export default App;
