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

    const fetchGroups = React.useCallback(async () => {
        try {
            const fetched = await request(`/api/group/list`, 'GET', null);
            setGroups([...groups, ...fetched.map(group => [group.group])])
        } catch (error) {}
    }, [request]);

    React.useEffect(() => {
        fetchGroups();
    }, [fetchGroups]);

    if (loading) return <p>Loading...</p>;

    return (
        <>
            <h1>Расписание группы</h1>

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

