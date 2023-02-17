import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Button } from '@mui/material';
import { useHttp } from "../../hooks/http.hook";
import { useNavigate } from 'react-router-dom'

export const Teachers = () => {

    const { request, loading } = useHttp();
    const [classrooms, setClassrooms] = React.useState([]);
    const [buildings, setBuildings] = React.useState([]);
    const [teacherValue, setTeacherValue] = React.useState(null);
    const navigate = useNavigate();

    const fetchClassrooms = React.useCallback(async () => {
        try {
            const fetched = await request(`/api/group/list`, 'GET', null);
        
            setClassrooms([...classrooms, ...fetched.map(classroom => [classroom.name, classroom.id])])

        } catch (error) {}
    }, [request]);

    React.useEffect(() => {
        fetchClassrooms();
    }, [fetchClassrooms]);


    if (loading) return <p>Loading...</p>;


    return (
        <>
            <h1>Расписание преподавателей</h1>
            <Autocomplete
                value={teacherValue}
                onChange={(event, newValue) => {
                    setTeacherValue(newValue);
                    console.log('classroomValue: ',teacherValue)
                }}
                disablePortal
                id="combo-box-demo"
                options={classrooms.map(items => items[0])}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Преподаватель" />}
            />

                

            {teacherValue != null &&
                <Button
                    onClick={()=> navigate(`/classroom/${teacherValue}`)}
                    variant="contained"
                >Показать расписание
                </Button>}
        </>
    );
}
