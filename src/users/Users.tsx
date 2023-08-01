import {
  Create,
  Datagrid,
  Edit,
  List,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";

export const UserList = (data: {
  data: {
    id: string;
    _id: string;
    name: string;
    email: string;
    password: string;
  }[];
}) => (
  <List>
    <Datagrid data={data.data} rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="email" />
      <TextField source="password" />
    </Datagrid>
  </List>
);

export const UserEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="password" />
    </SimpleForm>
  </Edit>
);

export const UserCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="password" />
    </SimpleForm>
  </Create>
);
