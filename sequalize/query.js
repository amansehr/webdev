const { db, student } = require('./createmodule')
const { Op } = require("sequelize");

const task = async () => {
    try {
        await db.sync()
        //! All the fn inside sequelize are promise based fn
        //! findAll() it fetch all the data of student model and return to students
        //!   const students = await student.findAll()
        const students = await student.findAll({
            // where: { age: 11 } //! to specify condn
            // where: { age: { $gt: 11 } }, //* $gt is greater than //* ye chala nhi check kar.lecture me chal ghaya tha sir ka
            // order: [['age', 'DESC'], ['name', 'ASC']] //! left to right apply hoga. Read documentation for more fn
            where: { //! Asha op use karke kikh $ ki jagh
                age: {
                    [Op.or]: {
                        [Op.lt]: 18,
                        [Op.gt]: 12
                    }
                }
            }
        }) //! Also specifing condn
        // console.log(students)
        students.forEach(element => console.log(element.dataValues));
    }
    catch (e) {
        console.error(e)
    }
}

task()