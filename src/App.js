import UserForm from "./components/UserForm";
import { Grid } from "@mui/material";
import UserList from "./components/UserList";
import { useState } from "react";
function App() {

  const [users, setUsers] = useState([]);

  const saveUserFormHandler = (userInput) => {
    setUsers( prevUsers => [userInput, ...prevUsers]);
  }

  return (
    <div className="App">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="top"
        style={{ minHeight: '100vh' }}
      >

        <Grid item xs={3}>
          <UserForm onSaveUserForm ={saveUserFormHandler} />
        </Grid>   
        
        <Grid item xs={3}>
          <UserList userList ={users}/>
        </Grid>

      </Grid> 
    </div>
  );
}

export default App;
