import { Stack } from "@mui/material"
import NavBar from "./component/common/NavBar"

export default function Dashboard() 
{
    return (
        <Stack sx={{ width: "100vw", background:"red" }}>
            <NavBar/>
            <h1>Welcome to Dashboard</h1>
        </Stack>
    )
}