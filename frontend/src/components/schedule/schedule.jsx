import * as React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { AuthContext } from "../../context/Auth.context";
import "./ScheduleTable.css";

export const Schedule = ({ schedule, group = true }) => {
  const theme = React.useContext(AuthContext);
  const daysOfWeek = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ];
  const lessons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handlePrint = () => {
    const printableTable = document.getElementById("printable-table");
    if (printableTable) {
      const printWindow = window.open("", "_blank");
      printWindow.document.write(`
        <html>
          <head>
            <title>Расписание</title>
            <style>
              @media print {
                .schedule-table {
                  border-collapse: collapse;
                }
              
                .schedule-table th,
                .schedule-table td {
                  border: 1px solid black;
                  padding: 8px;
                  font-size: 10px; /* Уменьшение размера шрифта */
                }
                
                // .schedule-page {
                //   page-break-before: always;
                // }
              }
            </style>
          </head>
          <body>
            ${printableTable.outerHTML}
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  return (
    <div className="schedule-table-container">
      <Button
        variant="contained"
        startIcon={<PrintIcon />}
        onClick={handlePrint}
        sx={{ mt: 2, mb: 2 }}
      >
        Распечатать
      </Button>
      <Button
        variant="contained"
        startIcon={<CloudDownloadIcon />}
        onClick={handlePrint}
        sx={{ mt: 2, ml: 2, mb: 2 }}
      >
        Скачать
      </Button>
      <TableContainer>
        <Table stickyHeader className="schedule-table" id="printable-table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              {daysOfWeek.map((day) => (
                <TableCell key={day}>{day}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {lessons.map((lesson, index) => (
              <TableRow
                key={lesson}
                className={index % 10 === 9 ? "schedule-page" : ""}
              >
                <TableCell className="lesson-cell">Урок {lesson}</TableCell>
                {daysOfWeek.map((day) => {
                  const lessonData = schedule.find(
                    (item) => item.weekday === day && item.lesson === lesson
                  );
                  return (
                    <TableCell key={day}>
                      {lessonData ? (
                        <div className="lesson-data">
                          <div className="lesson-subject">
                            {lessonData.subject}
                          </div>
                          {group === true && (
                            <div className="lesson-teacher">
                              {lessonData.teacher}
                            </div>
                          )}
                          {group === false && (
                            <div className="lesson-teacher">
                              {lessonData.group} гр.
                            </div>
                          )}
                          <div className="lesson-classroom">
                            {lessonData.classroom} каб.
                          </div>
                        </div>
                      ) : null}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
