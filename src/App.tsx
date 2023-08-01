import { Admin, Resource } from "react-admin";
import { dataProvider } from "./dataProvider";
import { UserCreate, UserEdit, UserList } from "./users/Users";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="users"
      create={UserCreate}
      list={UserList}
      edit={UserEdit}
    />
  </Admin>
);
