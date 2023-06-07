import * as React from 'react';
import { useHttp } from "../../hooks/http.hook";
import { useNavigate, useParams } from 'react-router-dom'
import { Schedule } from '../../components/schedule/schedule';
import moment from 'moment';


export const Classroom = () => {

<<<<<<< HEAD
    const id = useParams().classroomId;
    console.log('Classroom:', useParams())
=======
    const {classroomId, buildingId} = useParams();

>>>>>>> 994c7c6b40b4f53fb4c049ccbf6af03b07402021
    // const startDate = moment().startOf('week').format('YYYY-MM-DD');
    // const endDate = moment().endOf('week').format('YYYY-MM-DD');

    const { request, loading } = useHttp();
    const [schedule, setSchedule] = React.useState([]);

    const fetchSchedule = React.useCallback(async () => {
        try {
            
            const fetched = await request(`/api/schedule/${buildingId}/${classroomId}`, 'GET');
            
            console.log('ff',fetched);

            setSchedule([...schedule, ...fetched.map(group => [group.subject, group.buildings, group.classroom])])

        } catch (error) {
            console.log(error);
        
         }
    }, [request]);

    React.useEffect(() => {
        fetchSchedule();
    }, [fetchSchedule]);

    if (loading) return <p>Loading...</p>;
    if (!schedule.length) return <p>Loading...</p>;

    return (
        <>
            <h1>Расписание {classroomId} аудитории</h1>

<<<<<<< HEAD
            {/* <Schedule name={id} /> */}
=======
            <Schedule name={classroomId} schedule1={schedule} />
>>>>>>> 994c7c6b40b4f53fb4c049ccbf6af03b07402021

        </>
    );
}
