import * as React from 'react';
import { useHttp } from "../../hooks/http.hook";
import { useNavigate, useParams } from 'react-router-dom'
import { Schedule } from '../../components/schedule/schedule';
import moment from 'moment';






export const Group = () => {

    const name = useParams().name;

    const startDate = moment().startOf('week').format('YYYY-MM-DD');
    const endDate = moment().endOf('week').format('YYYY-MM-DD');

    const { request, loading } = useHttp();
    const [groupSchedule, setGroupSchedule] = React.useState([]);


    const fetchGroupSchedule = React.useCallback(async () => {
        try {
            console.log(startDate, endDate);
            console.log(name);

            const fetched = await request(`/api/schedule/group/${name}`, 'GET', {})

            console.log('ff',fetched);


            // setGroupSchedule([...groupSchedule, ...fetched.map(group => [group.name, group.id])])

        } catch (error) { }
    }, [request]);

    React.useEffect(() => {
        fetchGroupSchedule();
    }, [fetchGroupSchedule]);


    if (loading) return <p>Loading...</p>;



    return (
        <>
            <h1>Расписание {name} группы</h1>

            <Schedule name={name} />

        </>
    );
}

