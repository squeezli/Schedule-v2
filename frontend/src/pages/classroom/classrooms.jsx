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
            const fetched = await request(`/api/classroom/list`, 'GET', null);
        
            setClassrooms([...classrooms, ...fetched.map(classroom => [classroom.name, classroom.id])])

        } catch (error) {}
    }, [request]);

    React.useEffect(() => {
        fetchClassrooms();
    }, [fetchClassrooms]);


    if (loading) return <p>Loading...</p>;


    return (
         <>
            <h1>Расписание аудитории</h1>
            <Autocomplete
                value={buildingValue}
                onChange={(event, newValue) => {
                    setBuildingValue(newValue);
                    console.log('buildingValue: ',classroomValue)
                }}
                disablePortal
                id="combo-box-demo"
                options={buildings.map(items => items)}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Корпус" />}
            />

             {buildingValue != null &&
                <Autocomplete
                value={classroomValue}
                onChange={(event, newValue) => {
                    setClassroomValue(newValue);
                    console.log('classroomValue: ',classroomValue)
                }}
                disablePortal
                id="combo-box-demo"
                options={classrooms.map(items => items[0])}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Аудитория" />}
              />}

            {classroomValue != null &&
                <Button
                    onClick={()=> navigate(`/classroom/${classroomValue}`)}
                    variant="contained"
                >Показать расписание
                </Button>}
        </>
    );
}
