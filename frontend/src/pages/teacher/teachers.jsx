import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Button } from '@mui/material';
import { useHttp } from "../../hooks/http.hook";
import { useNavigate } from 'react-router-dom'
import { SelectorItems } from '../../components/selectorItems/selectorItems';
import { padding } from '@mui/system';

export const Teachers = () => {

    const { request, loading } = useHttp();
    // const [teachers, setTeachers] = React.useState([]);
    const navigate = useNavigate();

    const [valueTeacher, setValueTeacher] = React.useState(null);


    const teachers = ['Черничко И.С.', 'Пархатская А.М.', 'Лиготина Ж.В.']


    // const fetchClassrooms = React.useCallback(async () => {
    //     try {
    //         const fetched = await request(`/api/group/list`, 'GET', null);

    //         setClassrooms([...classrooms, ...fetched.map(classroom => [classroom.name, classroom.id])])

    //     } catch (error) {}
    // }, [request]);

    React.useEffect(() => {
        // fetchClassrooms();
    }, []);


    if (loading) return <p>Loading...</p>;


    return (
        <>


            <h1>Расписание преподавателей</h1>
            {/* <Autocomplete
                value={teacherValue}
                onChange={(event, newValue) => {
                    setTeacherValue(newValue);
                    console.log('classroomValue: ', teacherValue)
                }}
                disablePortal
                id="combo-box-demo"
                options={teachers.map(items => items)}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Преподаватель" />}
            /> */}


            <SelectorItems label='Преподаватель' items={teachers} setValue={setValueTeacher} value={valueTeacher} />

            {valueTeacher != null &&
                <Button
                    onClick={() => navigate(`/teacher/${valueTeacher}`)}
                    variant="contained"
                >Показать расписание
                </Button>}
        </>
    );
}
