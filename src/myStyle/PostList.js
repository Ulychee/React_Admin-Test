import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectIpnut,
    TextInput,
} from 'react-admin';

export const PostList = props => (
  <List {...props}>
      <Datagrid rowClick="edit">
          <TextField source="id" />
          <ReferenceField source="userId" reference="users">
            {/* <TextField source="id" /> */}
            <TextField source="name" />
          </ReferenceField>
          {/* <TextField source="id" /> */}
          <TextField source="title" />
          {/* <TextField source="body" /> */}
          <EditButton />
      </Datagrid>
  </List>
);

export const PostEdit = props => (
  <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
          <ReferenceInput source="userId" reference="users">
              {/* <SelectInput optionText="id" /> */}
          </ReferenceInput>
          {/* <TextInput source="id" /> */}
          <TextInput source="title" />
          {/* <TextInput source="body" /> */}
          <TextInput multiline source="body" />
      </SimpleForm>
  </Edit>
);