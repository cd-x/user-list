import {TextField, Button, Box} from "@mui/material";
import { useState } from "react";
import CustomModal from "./UI/CustomModal";

const UserForm = props =>{

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [open, setOpen] = useState(true);  

  const nameHandler = (event) =>{
    setName(event.target.value);
  }
  const ageHandler = (event) =>{
    setAge(event.target.value);
  }
  const submithandler = (event) =>{
    event.preventDefault()

    if(name.trim().length===0  || age.trim().length === 0){
      console.log('empty values');
      setOpen(true);
      return;
    }

    const userInput = {
      id: Math.random().toString(),
      name: name,
      age: age
    }
    props.onSaveUserForm(userInput);
    setName('');
    setAge('');
  }

  const modalCloseHandler = (val) =>{
    setOpen(val);
  }

  return (
    <div>
      {open &&   <CustomModal open ={open} onModalClose={modalCloseHandler}/> }
      <Box
    sx={{
      bgcolor: 'background.paper',
      boxShadow: 1,
      borderRadius: 2,
      p: 2,
      minWidth: 500,
      direction:"column",
      alignItems:"center",
      justifyContent:"center",
      marginTop: '20px'
    }}
    >
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          onSubmit={submithandler}
        >
          
            <TextField id="standard-basic-1" label="Name" value={name} variant="standard" onChange={nameHandler}/>
            <TextField id="standard-basic-2" label="Age" type="number" value={age} variant="standard" onChange={ageHandler}/>
          
          <div style={{ width: 'auto'}}>
            <Button variant="outlined" fullWidth={true} type='submit'>Add Person</Button>
          </div>
        </Box>
      </Box>
    </div>
  );
}

export default UserForm;

