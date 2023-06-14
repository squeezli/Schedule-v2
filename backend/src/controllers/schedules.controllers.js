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
const Call = require("../models/calls.models.js");

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

exports.createByCsv = async (req, res) => {

  let schedules = [];
  try {
    let result = [];
    console.log(req.file);
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
        Schedule.destroy({ where: {} });
        const schedule = Schedule.bulkCreate(schedules);
        return res
          .status(200)
          .json({ message: `Расписание загружено`, result: schedule });
      });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Что-то пошло не так, попробуйте снова.` });
  }
};

