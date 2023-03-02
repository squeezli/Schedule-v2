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

function createData(lesson, time, mon, tue, wed, th, fr, sa) {
    return { lesson, time, mon, tue, wed, th, fr, sa };
}

console.log();


const rows = [
    createData(1, '8:00 - 8:45', '', '', '', '', 'Физика 1 Гл', ''),
    createData(2, '8:55 - 9:40', '', '', '', '', 'Физика 1 Гл', ''),
    createData(3, '9:55 - 10:40', 'Физ-ра С', 'Физика 1 Гл', '', '', 'Химия 2 М', ''),
    createData(4, '11:00 - 11:45', 'Физ-ра С', 'Физика 1 Гл', '', '', '', 'Химия 2 М'),
    createData(5, '12:05 - 12:50', 'Информатика 53 М', 'Математика 30Гл', 'Физ-ра С', 'Информатика 53 М', '', ''),
    createData(6, '13:00 - 13:45', 'Информатика 53 М', 'Математика 30Гл', 'Физ-ра С', '', 'Информатика 53 М', ''),
    createData(7, '13:55 - 14:40', '', 'Химия 2 М', '', 'Информатика 53 М', 'Математика 30Гл', ''),
    createData(8, '14:50 - 15:35', '', 'Химия 2 М', '', 'Информатика 53 М', 'Математика 30Гл', ''),
    createData(9, '15:45 - 16:30', '', '', '', '', '', ''),
    createData(10, '16:40 - 17:25', '', '', '', '', '', ''),
];

export const Schedule = (props) => {
    return (
        <>
            <TableContainer component={Paper} sx={{ boxShadow: 'none',  }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{height: 73}}>
                            <TableCell sx={{ padding: '0 16px', width: '50px', border: 'none', position: 'absolute', backgroundColor: 'background.default', backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))', height: '100%', maxHeight: 83, marginLeft:7 }}></TableCell>
                            <TableCell sx={{ width: 85, padding: '0 20px', marginLeft: '0 15px', border: 'none', backgroundColor: 'background.default', backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))', height: '100%', position: 'absolute', maxHeight: 83 }}></TableCell>
                            <TableCell sx={{ paddingLeft: 12, border: 'none' }} align="left"></TableCell>
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
                                key={row.lesson}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 }, height: 73 }}
                            >
                                <TableCell sx={{ padding: '0 16px', border: 'none', backgroundColor: 'background.default', backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))', height: '100%', position: 'absolute', maxHeight: 73 }} component="th" scope="row" >
                                    {row.lesson}
                                </TableCell>

                                <TableCell sx={{ width: 85, padding: '0 20px', marginLeft: '35px', border: 'none', position: 'absolute', backgroundColor: 'background.default', backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))', height: '100%', maxHeight: 73 }}>{row.time}</TableCell>
                                <TableCell sx={{ paddingLeft: 12, border: 'none' }} align="center"></TableCell>
                                <TableCell align="center">{row.mon}</TableCell>
                                <TableCell align="center">{row.tue}</TableCell>
                                <TableCell align="center">{row.wed}</TableCell>
                                <TableCell align="center">{row.th}</TableCell>
                                <TableCell align="center">{row.fr}</TableCell>
                                <TableCell align="center">{row.sa}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

