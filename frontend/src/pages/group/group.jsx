import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Button } from '@mui/material';
import { useHttp } from "../../hooks/http.hook";


export const Group = () => {

    const {request, loading} = useHttp();

    const [groups, setGroups] = React.useState([]);
    

    const fetchGroups = React.useCallback(async () => {
        try {
            const fetched = await request(`/api/group/list`, 'GET', null);
            setGroups(fetched);
            console.log('fetched',fetched);
            
        } catch (error) {
            console.log('w',error);
        }
    }, [request]);

    React.useEffect(() => {
        fetchGroups();
        console.log('dasda');
        
    }, [fetchGroups]);

    const [value, setValue] = React.useState(null);

    if(loading) return <p>Loading...</p>;


    return (
        <>
            <h1>Расписание группы</h1>
            <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                disablePortal
                id="combo-box-demo"
                options={groups}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Группа" />}
            />

            {value != null && <Button variant="contained"> Contained</Button>}
        </>
    );
}

