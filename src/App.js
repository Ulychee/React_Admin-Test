import * as React from 'react'
// import { Admin } from 'react-admin'
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import { UserList } from './myStyle/users'
import { PostList } from './myStyle/PostList'

const  dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')
// const App = () => <Admin dataProvider={dataProvider} />

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      {/* <Resource name="posts" list={ListGuesser} />   */}
      {/* <Resource name="posts" list={PostList} />   */}
      <Resource name="posts" list={PostList} edit={EditGuesser} />
      <Resource name="users" list={UserList} />
    </Admin>
  )
}

export default App;
