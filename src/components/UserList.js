import { Box } from "@mui/material";

import UserInfo from "./UserInfo";
const UserList = props =>{

    const users = props.userList;


    return (
        <Box
        sx={{
        bgcolor: 'background.paper',
        boxShadow: 0,
        borderRadius: 2,
        py:3,
        my:2,
        minWidth: 570,
        direction:"column",
        alignItems:"center",
        justifyContent:"center"
        }}
        >
            {
                users.map( user => <UserInfo key = {user.id} name = {user.name} age = {user.age}></UserInfo>)
            }
        </Box>
    )
}

export default UserList;