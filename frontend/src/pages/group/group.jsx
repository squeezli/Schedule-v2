import * as React from 'react';
import { useHttp } from "../../hooks/http.hook";
import { useNavigate, useParams } from 'react-router-dom'
import { Schedule } from '../../components/schedule/schedule';
import moment from 'moment';


export const Group = () => {

    const id = useParams().id;

    // const startDate = moment().startOf('week').format('YYYY-MM-DD');
    // const endDate = moment().endOf('week').format('YYYY-MM-DD');

    console.log(id)

    const { request, loading } = useHttp();
    const [schedule, setSchedule] = React.useState([]);

    const fetchSchedule = React.useCallback(async () => {
        try {

            const fetched = await request(`/api/schedule/group/${id}`, 'GET');
            
            console.log('ff',fetched);

            setSchedule([...schedule, ...fetched.map(group=>[group.subject, group.classroom, group.buildings])])

        } catch (error) {
            console.log(error);
        
         }
    }, [request]);

    React.useEffect(() => {
        fetchSchedule();
    }, []);


    if (loading) return <p>Loading...</p>;
    if (!schedule.length) return <p>Loading...</p>;



    return (
        <>
            <h1>Расписание {id} группы</h1>
            {console.log('dasdas  ',schedule)}
            <Schedule name={id} schedule1={schedule}/>

        </>
    );
}
