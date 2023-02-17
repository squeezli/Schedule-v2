import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Button } from '@mui/material';
import { useHttp } from "../../hooks/http.hook";
import { useNavigate } from 'react-router-dom'

export const Groups = () => {

    const { request, loading } = useHttp();
    // const [groups, setGroups] = React.useState([])
    const [value, setValue] = React.useState(null);
    const navigate = useNavigate();

    const groups =['490','491','492','493','494','495']


    const fetchGroups = React.useCallback(async () => {
        try {
            const fetched = await request(`/api/group/list`, 'GET', null);

            // setGroups([...groups, ...fetched.map(group => [group.name, group.id])])

        } catch (error) {}
    }, [request]);

    // React.useEffect(() => {
    //     fetchGroups();
    // }, [fetchGroups]);


    if (loading) return <p>Loading...</p>;


    return (
        <>
            <h1>Расписание группы</h1>
            <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    console.log(groups)
                }}
                disablePortal
                id="combo-box-demo"
                // options={groups.map(group => group[0])}
                options={groups.map(group => group)}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Группа" />}
            />

            {value != null &&
                <Button
                    onClick={()=> navigate(`/group/${value}`)}
                    variant="contained"
                >Показать расписание
                </Button>}
        </>
    );
}

