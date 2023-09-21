import * as React from 'react';
import { useHttp } from "../../hooks/http.hook";
import { useNavigate, useParams } from 'react-router-dom'
import { Schedule } from '../../components/schedule/schedule';

export const Classroom = () => {
    
    const {classroomId, buildingId} = useParams();
    const { request, loading } = useHttp();
    const [schedule, setSchedule] = React.useState([]);

    const fetchSchedule = React.useCallback(async () => {
        try {
            const fetched = await request(`/api/schedule/${buildingId}/${classroomId}`, 'GET');
            setSchedule([...schedule, ...fetched.map(group => [group.subject, group.buildings, group.classroom])])
        } catch (error) {}
    }, [request]);

    React.useEffect(() => {
        fetchSchedule();
    }, [fetchSchedule]);

    if (loading) return <p>Loading...</p>;
    if (!schedule.length) return <p>Loading...</p>;

    return (
        <>
            <h1>Расписание {classroomId} аудитории</h1>

            <Schedule name={classroomId} schedule1={schedule} />

        </>
    );
}
