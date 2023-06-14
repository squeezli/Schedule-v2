const Schedule = require("../models/schedules.models.js");
const { Op } = require("sequelize");
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

    const group = await Group.findOne({where:{ name: number}})



    const id = req.body.groupid;
    // const { startDate, endDate } = await req.body;
    const schedules = await Schedule.findAll({
      where: {
        groupId: group.id,
        // date: { [Op.between]: [startDate, endDate] },
      },
    });
    const schedulesWithGroupName = schedules.map((schedule) => ({
      ...schedule.toJSON(),
      group: group.name,
    }));

    return res.status(200).json(schedulesWithGroupName, );
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

exports.showByClassroom = async (req, res) => {
  try {
    console.log(req.body)
    console.log(req.params)
    const classroom = req.body;
  } catch (error) {
    console.log(error);
  }
}

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
  let schedules = [];
  try {
    let result = [];
    console.log(req.file);
    await new Promise((resolve, reject) => {
      fs.createReadStream(req.file.path)
        .pipe(csv({ separator: ";" }))
        .on("data", (data) => result.push(data))
        .on("end", () => resolve())
        .on("error", (error) => reject(error));
    });

    for (const lessons of result) {
      const [group, created] = await Group.findOrCreate({ where: { name: lessons.group } });
      const [user, createdUser] = await User.findOrCreate({ where: { fio: lessons.teacher }, defaults:{ password: 'admin', login:'fio'}});
      const [subject, createdSubject] = await Subject.findOrCreate({ where: { name: lessons.subject } });
      console.log(group[0]);
      schedules.push({
        // teacher: lessons.teacher,
        group: lessons.group,
        groupId: group ? group[0].id : null,
        userId: user ? user[0].id : null,
        subjectId: subject ? subject[0].id : null,
        // date: lessons.date,
        lesson: lessons.lessons,
        // subject: lessons.subject,
        classroom: lessons.classroom,
        buildings: lessons.buildings,
        weekday: lessons.weekdays,
        // userId: 1,
      });
    }

    await Schedule.destroy({ where: {} });
    console.log(schedules);
    const schedule = await Schedule.bulkCreate(schedules);

    return res.status(200).json({
      message: `Расписание загружено`,
      result: schedule,
    });
  } catch (error) {
    console.log(error);
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
