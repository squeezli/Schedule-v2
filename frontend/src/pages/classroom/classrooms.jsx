import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Button } from '@mui/material';
import { useHttp } from "../../hooks/http.hook";
import { useNavigate } from 'react-router-dom'
import { SelectorItems } from '../../components/selectorItems/selectorItems';

export const Classrooms = () => {

    const buildings = ['Главный', 'Музыкальный', 'Сок']
    const classrooms = [['1 Гл', '2 Гл', '3 Гл'], ['1 Муз', '2 Муз', '3 Муз'], ['1 С', '2 С', '3 С']]

    const { request, loading } = useHttp();
    
    // const [classrooms, setClassrooms] = React.useState([]);
    // const [buildings, setBuildings] = React.useState([]);

    const [classroomValue, setClassroomValue] = React.useState(null);
    const [buildingValue, setBuildingValue] = React.useState(null);
    const navigate = useNavigate();


    // const fetchClassrooms = React.useCallback(async () => {
    //     try {
    //         const fetched = await request(`/api/classroom/list`, 'GET', null);

    //         setClassrooms([...classrooms, ...fetched.map(classroom => [classroom.name, classroom.id])])

    //     } catch (error) {}
    // }, [request]);

    // React.useEffect(() => {
    //     fetchClassrooms();
    // }, [fetchClassrooms]);
    
    

    if (loading) return <p>Loading...</p>;


    return (
        <>
            <h1>Расписание аудитории</h1>


            <SelectorItems value={buildingValue} setValue={setBuildingValue} label={"Корпус"} items={buildings} />
           
            {buildingValue != null &&
                <SelectorItems value={classroomValue} setValue={setClassroomValue} label={"Аудитория"} items={classrooms[0]} />
            }

            {classroomValue != null &&
                <Button
                    onClick={() => navigate(`/classroom/${buildingValue}/${classroomValue}`)}
                    variant="contained"
                >Показать расписание
                </Button>}
        </>
    );
}


