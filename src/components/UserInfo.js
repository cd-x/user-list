import { Avatar} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import {Typography, Box, Card, CardContent} from "@mui/material";

const UserInfo = props =>{
    return (
        <Card sx={{ display: 'flex' , marginTop: '12px', backgroundColor: "lavender"}}>
            <Box sx={{ display: 'flex', flexDirection: 'row'}}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Avatar sx={{bgColor: deepOrange[500]}}> {props.name[0]} </Avatar>
                </CardContent>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography variant="overline" display="block" gutterBottom >
                        { props.name }
                    </Typography>
                </CardContent>
                <CardContent sx={{ flex: '1 0 auto', marginLeft:'95%' }}>
                    <Typography variant="overline" display="block" gutterBottom>
                            { props.age }
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
}

export default UserInfo;