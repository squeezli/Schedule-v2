import * as React from 'react';
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { Button } from '@mui/material'
import { useHttp } from "../../hooks/http.hook"
import { useNavigate } from 'react-router-dom'
import { SelectorItems } from '../../components/selectorItems/selectorItems';

export const Classrooms = () => {

    const buildings = ['Главный', 'Музыкальный', 'Сок']

    const { request, loading } = useHttp();

    const [classrooms, setClassrooms] = React.useState([]);
   
    const [sortClassrooms, setSortClassrooms] = React.useState([]);

    const [classroomValue, setClassroomValue] = React.useState(null);
    const [buildingValue, setBuildingValue] = React.useState(null); 
    const navigate = useNavigate();

    const fetchClassrooms = React.useCallback(async () => {
        try {
            const fetched = await request(`/api/building/list`, 'GET', null);

            setClassrooms([...classrooms, ...fetched[0][0].map(classroom => [classroom.classroom])])
                 } catch (error) { }
    }, [request]);

    React.useEffect(() => {
        fetchClassrooms();
    }, [fetchClassrooms]);

    if (loading) return <p>Loading...</p>;

    return (
        <>
            <h1>Расписание аудитории</h1>

            <SelectorItems value={buildingValue} setValue={setBuildingValue} label={"Корпус"} items={buildings} />

            {buildingValue != null  && <SelectorItems value={classroomValue} setValue={setClassroomValue} label={"Аудитория"} items={classrooms} />
            
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


