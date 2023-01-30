// import { DataTypes } from "sequelize"
// import { sequelize } from "../utils/DB.js"


// // const Call = sequelize.define('call',{
// //     date:{
// //         type:DataTypes.DATE, 
// //     },
// //     time:{
// //         type:DataTypes.STRING,
// //     }
// // },
// // )


// const Role = sequelize.define('role', {
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//         allowNull: false,
//     },
//     name: {
//         type: DataTypes.STRING,

//         allowNull: false,
//     },
// })


// const Schedule =  sequelize.define('schedule', {
//     date: {
//         type: DataTypes.DATE,
//     }
// })


// const Group = sequelize.define('group', {
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//         allowNull: false,
//     },
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     }
// })



// const Classroom = sequelize.define('classroom', {
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//         allowNull: false,
//     },
//     numberClassroom:{
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
// },
// )



// const Building = sequelize.define('building', {
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//         allowNull: false,
//     },
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     shortName: {
//         type: DataTypes.STRING,
//     },
// },
// )



// const Subject = sequelize.define('subject', {
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//         allowNull: false,
//     },
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
// },
// )



// const UserInfo = sequelize.define('userInfo', {
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     lastname: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },

// })



// const User = sequelize.define("user", {
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//         allowNull: false,
//     },
//     login: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     password: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     email: {
//         type: DataTypes.STRING,
//     },
// },)



// Group.hasMany(Schedule)
// User.hasMany(Schedule)
// UserInfo.hasOne(User)
// Subject.hasMany(Schedule)
// Building.hasMany(Classroom)
// Classroom.hasMany(Schedule)


// export {Classroom, Group, Role, Call, User, UserInfo, Schedule, Subject, }