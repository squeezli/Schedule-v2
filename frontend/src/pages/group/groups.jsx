import * as React from 'react';
import { Button } from '@mui/material';
import { useHttp } from "../../hooks/http.hook";
import { useNavigate } from 'react-router-dom'
import { SelectorItems } from '../../components/selectorItems/selectorItems';

export const Groups = () => {

    const { request, loading } = useHttp();
    const [groups, setGroups] = React.useState([])
    const [value, setValue] = React.useState(null);
    const navigate = useNavigate();

    // const groups =['490','491','492','493','494','495']

    const fetchGroups = React.useCallback(async () => {
        try {
            const fetched = await request(`/api/group/list`, 'GET', null);
            console.log('fetched: ',fetched)
            
            setGroups([...groups, ...fetched.map(group => [group.name])])


        } catch (error) {}
    }, [request]);

    React.useEffect(() => {
        fetchGroups();
    }, [fetchGroups]);

    if (loading) return <p>Loading...</p>;

    return (
        <>
            <h1>Расписание группы</h1>
            {console.log(groups)}

            <SelectorItems items={groups} setValue={setValue} value={value} label='Группы' />

            {value != null &&
                <Button
                    onClick={()=> navigate(`/group/${value}`)}
                    variant="contained"
                >Показать расписание
                </Button>}
        </>
    );
}

