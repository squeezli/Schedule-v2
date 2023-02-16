import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Button } from '@mui/material';
import { useHttp } from "../../hooks/http.hook";
import { useNavigate } from 'react-router-dom'

export const Classrooms = () => {

    const { request, loading } = useHttp();
    const [classrooms, setClassrooms] = React.useState([]);
    const [buildings, setBuildings] = React.useState([]);
    const [classroomValue, setClassroomValue] = React.useState(null);
    const [buildingValue, setBuildingValue] = React.useState(null);
    const navigate = useNavigate();

    const fetchClassrooms = React.useCallback(async () => {
        try {
            const fetched = await request(`/api/group/list`, 'GET', null);
        
            setClassrooms([...classrooms, ...fetched.map(classroom => [classroom.name, classroom.id])])

        } catch (error) {}
    }, [request]);

    React.useEffect(() => {
        fetchGroups();
    }, [fetchGroups]);


    if (loading) return <p>Loading...</p>;


    return (
        <>
            <h1>Расписание аудитории</h1>
            <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                    setClassroomValue(newValue);
                    console.log('classroomValue: ',classroomValue)
                }}
                disablePortal
                id="combo-box-demo"
                options={classrooms.map(items => item[0])}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Корпус" />}
            />

             {value != null &&
                <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                    setBuildingValue(newValue);
                    console.log('buildingValue: ',buildingValue)
                }}
                disablePortal
                id="combo-box-demo"
                options={classrooms.map(items => item[0])}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Аудитория" />}
              />}

            {value != null &&
                <Button
                    onClick={()=> navigate(`/classroom/${value}`)}
                    variant="contained"
                >Показать расписание
                </Button>}
        </>
    );
}
