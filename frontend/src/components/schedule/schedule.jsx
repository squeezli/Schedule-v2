import * as React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import moment from 'moment';
moment.locale('ru');


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData(1, '1:59 - 2:40', 'groupSchedule', 'groupSchedule', 'groupSchedule', 'groupSchedule', 'groupSchedule'),
    createData(2, '1:59 - 2:40', 'groupSchedule', 'groupSchedule', 'groupSchedule', 'groupSchedule', 'groupSchedule'),
    createData(3, '1:59 - 2:40', 'groupSchedule', 'groupSchedule', 'groupSchedule', 'groupSchedule', 'groupSchedule'),
    createData(4, '1:59 - 2:40', 'groupSchedule', 'groupSchedule', 'groupSchedule', 'groupSchedule', 'groupSchedule'),
    createData(5, '1:59 - 2:40', 'groupSchedule', 'groupSchedule', 'groupSchedule', 'groupSchedule', 'groupSchedule'),
    createData(6, '1:59 - 2:40', 'groupSchedule', 'groupSchedule', 'groupSchedule', 'groupSchedule', 'groupSchedule'),
    createData(7, '1:59 - 2:40', 'groupSchedule', 'groupSchedule', 'groupSchedule', 'groupSchedule', 'groupSchedule'),
    createData(8, '1:59 - 2:40', 'groupSchedule', 'groupSchedule', 'groupSchedule', 'groupSchedule', 'groupSchedule'),
    createData(9, '1:59 - 2:40', 'groupSchedule', 'groupSchedule', 'groupSchedule', 'groupSchedule', 'groupSchedule'),
    createData(10, '1:59 - 2:40', 'groupSchedule', 'groupSchedule', 'groupSchedule', 'groupSchedule', 'groupSchedule'),
];

export const Schedule = (props) => {



    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ width: 10, padding: 0 }}></TableCell>
                            <TableCell sx={{ width: 70, padding: 0 }}></TableCell>
                            <TableCell align="left">Понедельник <br /><Typography variant="caption">дата</Typography> </TableCell>
                            <TableCell align="left">Вторник <br /><Typography variant="caption">дата</Typography> </TableCell>
                            <TableCell align="left">Среда <br /><Typography variant="caption">дата</Typography> </TableCell>
                            <TableCell align="left">Четверг <br /><Typography variant="caption">дата</Typography> </TableCell>
                            <TableCell align="left">Пятница <br /><Typography variant="caption">дата</Typography> </TableCell>
                            <TableCell align="left">Суббота <br /> <Typography variant="caption">дата</Typography></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell sx={{ width: 20, padding: 0 }}  component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell sx={{ width: 70, padding: 0 }}>{row.calories}</TableCell>
                                <TableCell align="center">{row.fat}</TableCell>
                                <TableCell align="center">{row.carbs}</TableCell>
                                <TableCell align="center">{row.carbs}</TableCell>
                                <TableCell align="center">{row.carbs}</TableCell>
                                <TableCell align="center">{row.carbs}</TableCell>
                                <TableCell align="center">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    )
}

