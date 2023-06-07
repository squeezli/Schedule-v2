import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

function createData(lesson, time, days) {
  return { lesson, time, days };
}

export const Schedule = (props) => {
  const schedule = props.schedule1;

  console.log(schedule)

  const rows = [
    createData(1, "8:00 - 8:45", schedule[0]?.join(" ")),
    createData(2, "8:55 - 9:40", schedule[1]?.join(" ")),
    createData(3, "9:55 - 10:40", schedule[2]?.join(" ")),
    createData(4, "11:00 - 11:45", schedule[3]?.join(" ")),
    createData(5, "12:05 - 12:50", schedule[4]?.join(" ")),
    createData(6, "13:00 - 13:45", schedule[5]?.join(" ")),
    createData(7, "13:55 - 14:40", schedule[6]?.join(" ")),
    createData(8, "14:50 - 15:35", schedule[7]?.join(" ")),
    createData(9, "15:45 - 16:30", schedule[8]?.join(" ")),
    createData(10, "16:40 - 17:25", schedule[9]?.join(" ")),
  ];

  return (
    <>
      <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ height: 73 }}>
              <TableCell
                sx={{
                  padding: "0 16px",
                  width: "50px",
                  border: "none",
                  position: "sticky",
                  left: 0,
                  backgroundColor: "background.default",
                  zIndex: 1,
                }}
              >
                &nbsp;
              </TableCell>
              <TableCell
                sx={{
                  width: 85,
                  padding: "0 20px",
                  border: "none",
                  position: "sticky",
                  left: 50,
                  backgroundColor: "background.default",
                  zIndex: 1,
                }}
              >
                &nbsp;
              </TableCell>
              <TableCell
                sx={{ paddingLeft: 12, border: "none" }}
                align="left"
              ></TableCell>
              <TableCell align="left">Понедельник</TableCell>
              <TableCell align="left">Вторник</TableCell>
              <TableCell align="left">Среда</TableCell>
              <TableCell align="left">Четверг</TableCell>
              <TableCell align="left">Пятница</TableCell>
              <TableCell align="left">Суббота</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.lesson}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  height: 73,
                }}
              >
                <TableCell
                  sx={{ padding: "0 16px", border: "none" }}
                  component="th"
                  scope="row"
                >
                  {row.lesson}
                </TableCell>
                <TableCell
                  sx={{ width: 85, padding: "0 20px", border: "none" }}
                >
                  {row.time}
                </TableCell>
                <TableCell
                  sx={{ paddingLeft: 12, border: "none" }}
                  align="center"
                ></TableCell>
                {row.days.map((day, index) => (
                  <TableCell key={index} sx={{ maxWidth: 170 }} align="center">
                    {day}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="body2" sx={{ mt: 2, color: "text.secondary" }}>
        *Примечание: В таблице представлено расписание на текущую неделю.
      </Typography>
    </>
  );
};
