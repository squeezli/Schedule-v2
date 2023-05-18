import * as React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

// import moment from 'moment';
// moment.locale('ru');

function createData(lesson, time, mon, tue, wed, th, fr, sa) {
    return { lesson, time, mon, tue, wed, th, fr, sa };
}


export const Schedule = (props) => {

    const schedule = props.schedule1

    

    // console.log(schedule[0][0])

    const rows = [
    createData(1, '8:00 - 8:45', (schedule[0]? schedule[0][0] +' '+ schedule[0][1]+' '+ schedule[0][2]: null),       (schedule[10]? schedule[10][0] +' '+ schedule[10][1]+' '+ schedule[10][2]: null), (schedule[20]? schedule[20][0] +' '+ schedule[20][1]+' '+ schedule[20][2]: null), (schedule[30]? schedule[30][0] +' '+ schedule[30][1]+' '+ schedule[30][2]: null), (schedule[40]? schedule[40][0] +' '+ schedule[40][1]+' '+ schedule[40][2]: null), (schedule[50]? schedule[50][0] +' '+ schedule[50][1]+' '+ schedule[50][2] : null)),
    createData(2, '8:55 - 9:40', (schedule[1]? schedule[1][0] +' '+ schedule[1][1]+' '+ schedule[1][2]: null),        (schedule[11]? schedule[11][0] +' '+ schedule[11][1]+' '+ schedule[11][2]: null),(schedule[21]? schedule[21][0] +' '+ schedule[21][1]+' '+ schedule[21][2]: null), (schedule[31]? schedule[31][0] +' '+ schedule[31][1]+' '+ schedule[31][2]: null), (schedule[41]? schedule[41][0] +' '+ schedule[41][1]+' '+ schedule[41][2]: null), (schedule[51]? schedule[51][0] +' '+ schedule[51][1]+' '+ schedule[51][2]: null)),
     createData(3, '9:55 - 10:40', (schedule[2]? schedule[2][0] +' '+ schedule[2][1]+' '+ schedule[2][2]: null),       (schedule[12]? schedule[12][0] +' '+ schedule[12][1]+' '+ schedule[12][2]: null),(schedule[22]? schedule[22][0] +' '+ schedule[22][1]+' '+ schedule[22][2]:null), (schedule[32]? schedule[32][0] +' '+ schedule[32][1]+' '+ schedule[32][2]: null), (schedule[42]? schedule[42][0] +' '+ schedule[42][1]+' '+ schedule[42][2]: null), (schedule[52]? schedule[52][0] +' '+ schedule[52][1]+' '+ schedule[52][2]: null)),
    createData(4, '11:00 - 11:45', (schedule[3]? schedule[3][0] +' '+ schedule[3][1]+' '+ schedule[3][2]: null),      (schedule[13]? schedule[13][0] +' '+ schedule[13][1]+' '+ schedule[13][2]: null),(schedule[23]? schedule[23][0] +' '+ schedule[23][1]+' '+ schedule[23][2]: null), (schedule[33]? schedule[33][0] +' '+ schedule[33][1]+' '+ schedule[33][2]: null), (schedule[43]? schedule[43][0] +' '+ schedule[43][1]+' '+ schedule[43][2]: null), (schedule[53]? schedule[53][0] +' '+ schedule[53][1]+' '+ schedule[53][2]: null)),
    createData(5, '12:05 - 12:50', (schedule[4]? schedule[4][0] +' '+ schedule[4][1]+' '+ schedule[4][2]: null),      (schedule[14]? schedule[14][0] +' '+ schedule[14][1]+' '+ schedule[14][2]: null),(schedule[24]? schedule[24][0] +' '+ schedule[24][1]+' '+ schedule[24][2]: null), (schedule[34]? schedule[34][0] +' '+ schedule[34][1]+' '+ schedule[34][2]: null), (schedule[44]? schedule[44][0] +' '+ schedule[44][1]+' '+ schedule[44][2]: null), (schedule[54]? schedule[54][0] +' '+ schedule[54][1]+' '+ schedule[54][2]: null)),
    createData(6, '13:00 - 13:45', (schedule[5]? schedule[5][0] +' '+ schedule[5][1]+' '+ schedule[5][2]: null),      (schedule[15]? schedule[15][0] +' '+ schedule[15][1]+' '+ schedule[15][2]: null),(schedule[25]? schedule[25][0] +' '+ schedule[25][1]+' '+ schedule[25][2]: null), (schedule[35]? schedule[35][0] +' '+ schedule[35][1]+' '+ schedule[35][2]: null), (schedule[45]? schedule[45][0] +' '+ schedule[45][1]+' '+ schedule[45][2]: null), (schedule[55]? schedule[55][0] +' '+ schedule[55][1]+' '+ schedule[55][2]: null)),
    createData(7, '13:55 - 14:40', (schedule[6]? schedule[6][0] +' '+ schedule[6][1]+' '+ schedule[6][2]: null),      (schedule[16]? schedule[16][0] +' '+ schedule[16][1]+' '+ schedule[16][2]: null),(schedule[26]? schedule[26][0] +' '+ schedule[26][1]+' '+ schedule[26][2]: null), (schedule[36]? schedule[36][0] +' '+ schedule[36][1]+' '+ schedule[36][2]: null), (schedule[46]? schedule[46][0] +' '+ schedule[46][1]+' '+ schedule[46][2]: null), (schedule[56]? schedule[56][0] +' '+ schedule[56][1]+' '+ schedule[56][2]: null)),
    createData(8, '14:50 - 15:35',(schedule[7]? schedule[7][0] +' '+ schedule[7][1]+' '+ schedule[7][2]: null),       (schedule[17]? schedule[17][0] +' '+ schedule[17][1]+' '+ schedule[17][2]: null),(schedule[27]? schedule[27][0] +' '+ schedule[27][1]+' '+ schedule[27][2]: null), (schedule[37]? schedule[37][0] +' '+ schedule[37][1]+' '+ schedule[37][2]: null), (schedule[47]? schedule[47][0] +' '+ schedule[47][1]+' '+ schedule[47][2]: null), (schedule[57]? schedule[57][0] +' '+ schedule[57][1]+' '+ schedule[57][2]: null)),
    createData(9, '15:45 - 16:30', (schedule[8]? schedule[8][0] +' '+ schedule[8][1]+' '+ schedule[8][2]: null),      (schedule[18]? schedule[18][0] +' '+ schedule[18][1]+' '+ schedule[18][2]: null),(schedule[28]? schedule[28][0] +' '+ schedule[28][1]+' '+ schedule[28][2]: null), (schedule[38]? schedule[38][0] +' '+ schedule[38][1]+' '+ schedule[38][2]: null), (schedule[48]? schedule[48][0] +' '+ schedule[48][1]+' '+ schedule[48][2]: null), (schedule[58]? schedule[58][0] +' '+ schedule[58][1]+' '+ schedule[58][2]: null)),
    createData(10, '16:40 - 17:25', (schedule[9]? schedule[9][0] +' '+ schedule[9][1]+' '+ schedule[9][2]:null),     (schedule[19]? schedule[19][0] +' '+ schedule[19][1]+' '+ schedule[19][2]: null),(schedule[29]? schedule[29][0] +' '+ schedule[29][1]+' '+ schedule[29][2]: null), (schedule[39]? schedule[39][0] +' '+ schedule[39][1]+' '+ schedule[39][2]: null), (schedule[49]? schedule[49][0] +' '+ schedule[49][1]+' '+ schedule[49][2]: null), (schedule[59]? schedule[59][0] +' '+ schedule[59][1]+' '+ schedule[59][2]: null)),
    ]

    return (
        <>
            <TableContainer component={Paper} sx={{ boxShadow: 'none',  }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{height: 73}}>
                            <TableCell sx={{ padding: '0 16px', width: '50px', border: 'none', position: 'absolute', backgroundColor: 'background.default', backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))', height: '100%', maxHeight: 83, marginLeft:7 }}></TableCell>
                            <TableCell sx={{ width: 85, padding: '0 20px', marginLeft: '0 15px', border: 'none', backgroundColor: 'background.default', backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))', height: '100%', position: 'absolute', maxHeight: 83 }}></TableCell>
                            <TableCell sx={{ paddingLeft: 12, border: 'none' }} align="left"></TableCell>
                            <TableCell align="left">Понедельник <br />
                            {/* <Typography variant="caption">дата</Typography>  */}
                            </TableCell>
                            <TableCell align="left">Вторник <br />
                            {/* <Typography variant="caption">дата</Typography> */}
                             </TableCell>
                            <TableCell align="left">Среда <br />
                            {/* <Typography variant="caption">дата</Typography> */}
                             </TableCell>
                            <TableCell align="left">Четверг <br />
                            {/* <Typography variant="caption">дата</Typography> */}
                            </TableCell>
                            <TableCell align="left">Пятница <br />
                            {/* <Typography variant="caption">дата</Typography>  */}
                            </TableCell>
                            <TableCell align="left">Суббота <br /> 
                            {/* <Typography variant="caption">дата</Typography> */}
                            </TableCell>
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
                                <TableCell sx={{maxWidth:170}} align="center">{row.mon}</TableCell>
                                <TableCell sx={{maxWidth:170}} align="center">{row.tue}</TableCell>
                                <TableCell sx={{maxWidth:170}} align="center">{row.wed}</TableCell>
                                <TableCell sx={{maxWidth:170}} align="center">{row.th}</TableCell>
                                <TableCell sx={{maxWidth:170}} align="center">{row.fr}</TableCell>
                                <TableCell sx={{maxWidth:170}} align="center">{row.sa}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

