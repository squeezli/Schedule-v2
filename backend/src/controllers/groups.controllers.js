const Group = require("../models/groups.models.js");
const Schedule = require("../models/schedules.models.js");
const { sequelize } = require("../utils/DB.utils.js");
const { QueryTypes } = require("sequelize");
exports.list = async (req, res) => {
  try {
    const groups = await sequelize.query("SELECT * FROM `groups`");

    // console.log(groups[0]);
    return res.status(200).json(groups);
  } catch (error) {
    return res.status(500);
  }
};
exports.show = async (req, res) => {
  try {
    const id = req.params.id;

    const group = await Group.findOne({ where: { id } });
    if (!group) {
      return res.status(400).json({ message: `Группа не найдена` });
    }

    return res.status(200).json({ group });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Что-то пошло не так, попробуйте снова` });
  }
};

exports.create = async (req, res) => {
  try {
    const { name } = req.body;

    const candidate = await Group.findOne({ where: { name } });
    // console.log("Candidate: ", candidate);
    if (candidate) {
      return res
        .status(400)
        .json({ message: `Группа с таким именем: ${name}, уже добавлена.` });
    }

    const group = await Group.create({
      name,
    });

    return res.status(201).json({ message: `Группа добавлена` });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Что-то пошло не так, попробуйте снова.` });
  }
};

exports.update = async (req, res) => {
  try {
    const { name } = req.body;
    const id = req.params.id;
    const candidate = await Group.findOne({ where: { name } });
    if (candidate) {
      return res
        .status(400)
        .json({ message: `Группа с данным именем: ${name}, уже имеется.` });
    }

    await Group.update(
      {
        name,
      },
      {
        where: {
          id: id,
        },
      }
    );

    return res.status(200).json({ message: `Название группы изменено` });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Что-то пошло не так, попробуйте снова` });
  }
};

exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    await Group.destroy({
      where: {
        id: id,
      },
    });
    return res.status(204).json({ message: `Группа удалена` });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Что-то пошло не так, попробуйте снова` });
  }
};
