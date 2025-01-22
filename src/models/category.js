const db = require('./sqlite')

const create = (name, callback) => {
    const sql = `INSERT INTO categoories (name) VALUES (?)`

    db.run(sql, [name], function (error) {
        if (error) {
            return callback(error)
        }
        callback(null, this.lastID)
    })
}

//mostrar todos los productos
const findAll = (callback) => {
    const sql = `SELECT * FROM categories`

    db.all(sql, (error, rows) => {
        if (error) {
            return callback(error)
        }
        callback(null, rows)
    })

}

//mostrar un producto
const findById = (id, callback) => {
    const sql = `SELECT * FROM categories WHERE id = ?`

    db.get(sql, [id], (error, row) => {
        if (error) {
            return callback(error)
        }
        callback(null, row)
    })
}

// modelo para EDITAR

const update = (id, name, callback) => {
    const sql = `UPDATE categories SET name = ? WHERE id = ?`

    db.run(sql, [name, id,], function (error) {
        if (error) {
            return callback(error)
        }
        callback(null, this.changes)
    })

}

const destroy = (id, callback) => {
    const sql = `DELETE FROM categories WHERE id = ?`

    db.run(sql, [id], function (error) {
        if (error) {
            return callback(error)
        }
        callback(null, this.changes)
    })
}
module.exports = {
    create,
    findAll,
    findById,
    update,
    destroy
}