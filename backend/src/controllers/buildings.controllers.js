
const { sequelize } = require("../utils/DB.utils.js");
exports.list = async (req, res) => {
    try {
        // const teachers = await Role.findAll({
        //   where: { name: "teacher" },
        //   include: User,
        // }).then((data) => data);

        const resultClassroom = await sequelize.query(
            "SELECT DISTINCT `classroom` FROM `schedules`"
        );
        const resultBuilding = await sequelize.query(
            "SELECT DISTINCT `buildings` FROM `schedules`"
        );
        // console.log(result);
        const result = [resultClassroom, resultBuilding]
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);

        return res
            .status(500)
            .json({ message: `Что-то пошло не так, попробуйте снова` });
    }
};

exports.show = async (req, res) => {
    try {



    } catch (error) {

    }
}

exports.create = async (req, res) => {
    try {

    } catch (error) {
        return res.status(400).json({ message: `Что то пошло не так, попробуйте снова` })
    }
}

exports.update = async (req, res) => {
    try {

    } catch (error) {

    }
}

exports.delete = async (req, res) => {
    try {

    } catch (error) {

    }
}

exports.delete = async (req, res) => {
    try {

    } catch (error) {

    }
}