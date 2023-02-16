import * as React from 'react';
import { useHttp } from "../../hooks/http.hook";
import { useNavigate, useParams } from 'react-router-dom'
import { Schedule } from '../../components/schedule/schedule';
import moment from 'moment';


export const Classroom = () => {

    const id = useParams().id;

    const startDate = moment().startOf('week').format('YYYY-MM-DD');
    const endDate = moment().endOf('week').format('YYYY-MM-DD');

    const { request, loading } = useHttp();
    const [groupSchedule, setGroupSchedule] = React.useState([]);

    const fetchSchedule = React.useCallback(async () => {
        try {
            
            const fetched = await request(`/api/schedule/classroom/${id}`, 'POST', {startDate, endDate});
            
            console.log('ff',fetched);

            // setSchedule([...groupSchedule, ...fetched.map(group => [group.name, group.id])])

        } catch (error) {
            console.log(error);
        
         }
    }, [request]);

    React.useEffect(() => {
        fetchSchedule();
    }, [fetchSchedule]);

    if (loading) return <p>Loading...</p>;

    return (
        <>
            <h1>Расписание {id} аудитории</h1>

            <Schedule name={id} />

        </>
    );
}
