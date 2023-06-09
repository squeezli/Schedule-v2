// import React from 'react';
// import './schedule.css'; // Импорт файла стилей

// export const Schedule = ({ schedule }) => {
//   const daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'];
//   const lessons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//   return (
//     <table className="schedule-table"> {/* Добавление класса для таблицы */}
//       <thead>
//         <tr>
//           <th></th>
//           {daysOfWeek.map((day) => (
//             <th key={day}>{day}</th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {lessons.map((lesson) => (
//           <tr key={lesson}>
//             <td>Урок {lesson}</td>
//             {daysOfWeek.map((day) => {
//               const lessonData = schedule.find(
//                 (item) => item.weekday === day && item.lesson === lesson
//               );
//               return (
//                 <td key={day}>
//                   {lessonData ? (
//                     <div className="lesson-data"> {/* Добавление класса для данных урока */}
//                       <div>{lessonData.subject}</div>
//                       <div>{lessonData.teacher}</div>
//                       <div>{lessonData.classroom}</div>
//                     </div>
//                   ) : null}
//                 </td>
//               );
//             })}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

import * as React from "react";
import "./ScheduleTable.css";
import { AuthContext } from "../../context/Auth.context";

export const Schedule = ({ schedule, group = true }) => {

    const theme = React.useContext(AuthContext)
  const daysOfWeek = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница"];
  const lessons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="schedule-table-container">
      <table className="schedule-table" >
        <thead>
          <tr>
            <th></th>
            {daysOfWeek.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {lessons.map((lesson) => (
            <tr key={lesson}>
              <td className="lesson-cell">Урок {lesson}</td>
              {daysOfWeek.map((day) => {
                const lessonData = schedule.find(
                  (item) => item.weekday === day && item.lesson === lesson
                );
                return (
                  <td key={day}>
                    {lessonData ? (
                      <div className="lesson-data">
                        <div className="lesson-subject">
                          {lessonData.subject}
                        </div>
                        {group == true && (
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
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
