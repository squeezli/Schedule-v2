const { Op } = require("sequelize");
const Schedule = require("../models/schedules.models.js");
const User = require("../models/users.models.js");
const { sequelize } = require("../utils/DB.utils.js");
const csv = require("csv-parser");
const fs = require("fs");
const Group = require("../models/groups.models.js");
const Subject = require("../models/subjects.models.js");
const Classroom = require("../models/classrooms.models.js");
const Building = require("../models/buildings.models.js");

exports.showByUser = async (req, res) => {
  try {
    const fio = req.params.fio;
    // const { startDate, endDate } = req.body;

    const shedules = await Schedule.findAll({
      where: {
        teacher: fio,
        // date: { [Op.between]: [startDate, endDate] },
      },
    });
    // console.log(shedules)
    return res.status(200).json(shedules);
  } catch (error) {
    // console.error(error)
    return res
      .status(500)
      .json({ message: `Что-то пошло не так, попробуйте снова` });
  }
};

exports.showByGroup = async (req, res) => {
  try {
    // console.log("da");
    const number = req.params.number;
    // const { startDate, endDate } = await req.body;

    // console.log(id);

    const schedules = await Schedule.findAll({
      where: {
        group: number,
        // date: { [Op.between]: [startDate, endDate] },
      },
    });

    // console.log("sdas", schedules);

    return res.status(200).json(schedules);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: `Что-то пошло не так, попробуйте снова` });
  }
};
exports.showByClassroom = async (req, res) => {
  try {
    // console.log("da");
    const number = req.params.number;
    const building = req.params.building;
    // const { startDate, endDate } = await req.body;

    console.log(building[0]);

    // console.log(id);

    const schedules = await Schedule.findAll({
      where: {
        classroom: number,
        buildings: building[0].toUpperCase(),
        // date: { [Op.between]: [startDate, endDate] },
      },
    });

    return res.status(200).json(schedules);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: `Что-то пошло не так, попробуйте снова` });
  }
};

exports.create = async (req, res) => {
  try {
    const { days } = req.body;
    let schedules = [];

    days.forEach((lessons) => {
      lessons.lessons.forEach((lesson) => {
        schedules.push({
          userId: lesson.userId,
          groupId: lesson.groupId,
          date: lesson.date,
          lesson: lesson.lesson,
          subjectId: lesson.subjectId,
          classroomId: lesson.classroomId,
        });
      });
    });

    const schedule = await Schedule.bulkCreate(schedules);

    return res.status(200).json({ message: `Расписание добавлено` });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Что-то пошло не так, попробуйте снова.` });
  }
};


exports.createByCsv = async (req, res) => {
  // console.log(req)
  let schedules = [];
  try {
    let result = [];
    // console.log(req.file);
    fs.createReadStream(req.file.path)
      .pipe(csv({ separator: ";" }))
      .on("data", (data) => result.push(data))
      .on("end", () => {
        result.forEach(  (lessons, index) => {
            let groupId =  Group.findOne({ where: { name: lessons.group } })
            console.log(groupId.id)
           schedules.push ({
            teacher: lessons.teacher,
            group: lessons.group,
            // groupId:  groupId,
            // date: lessons.date,
            lesson: lessons.lessons,
            subject: lessons.subject,
            classroom: lessons.classroom,
            buildings: lessons.buildings,
            weekday: lessons.weekdays,
          });
        });
        // console.log(schedules, "da");
        Schedule.destroy({ where: {} });
        const schedule = Schedule.bulkCreate(schedules);
        return res
          .status(200)
          .json({ message: `Расписание добавлено`, result: schedule });
      });
  } catch (error) {
    // console.log(error);
    return res
      .status(500)
      .json({ message: `Что-то пошло не так, попробуйте снова.` });
  }
};
// exports.createByCsv = async (req, res) => {
//   try {
//     let schedules = [];
//     let result = [];
//     fs.createReadStream(req.file.path)
//       .pipe(csv({ separator: ";" }))
//       .on("data", (data) => result.push(data))
//       .on("end", () => {
//         result.forEach( async (lessons, index) => {
//           let user = await User.findOne({ where: { fio: lessons.teacher } });
//           console.log('User:', user)
//             let groupId = Group.findOne({ where: { name: lessons.group } });
//             let subject = Subject.findOne({ where: { name: lessons.subject } });
//           schedules.push({
//             userId: '2',
//             groupId: "1",
//             date: lessons.date,
//             lesson: lessons.lessons,
//             subjectId: "1",
//             classroomId: "1",
//           });
//         });
//       });

//     // console.log(schedules, "da");
//     const schedule = Schedule.bulkCreate(schedules);
//     return res
//       .status(200)
//       .json({ message: `Расписание добавлено`, result: schedule });
//   } catch (error) {
//     // console.log(error);
//     return res
//       .status(500)
//       .json({ message: `Что-то пошло не так, попробуйте снова.` });
//   }
// };

exports.updateDay = async (req, res) => {
  try {
    const id = req.params.id;
    const { schedule } = req.body;

    await Schedule.update(
      {
        userId: schedule.userId,
        groupId: schedule.groupId,
        date: schedule.date,
        lesson: schedule.lesson,
        subjectId: schedule.subjectId,
        classroomId: schedule.classroomId,
      },
      {
        where: {
          id: id,
        },
      }
    );

    return res.status(200).json({ message: `Расписание обновлено` });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Что-то пошло не так, попробуйте снова` });
  }
};

exports.updateWeek = async (req, res) => {
  try {
    const id = req.params.id;
    const { schedules } = req.body;

    // await Schedule.update({
    //     userId: schedule.userId,
    //     groupId: schedule.groupId,
    //     date: schedule.date,
    //     lesson: schedule.lesson,
    //     subjectId: schedule.subjectId,
    //     classroomId: schedule.classroomId,
    // }, {
    //     where: {
    //         id: id
    //     }
    // })

    return res.status(200).json({ message: `Расписание обновлено` });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Что-то пошло не так, попробуйте снова` });
  }
};

exports.delete = async (req, res) => {
  // try {
  //     const id = req.params.id
  //     await User.destroy({
  //         where: {
  //             id: id,
  //         }
  //     })
  //     return res.status(204).json({ message: `Пользователь удален` })
  // } catch (error) {
  return res
    .status(500)
    .json({ message: `Что-то пошло не так, попробуйте снова` });
  // }
};
