const con = require('../../config/dbconfig')

const daoCommon = require('../daoCommon')

const labelDao = {
    ...daoCommon,
    table: 'label',

    create: (req, res) => {
        if(Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message": "No fields to create"
            })
        }  else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

            con.query(
                `INSERT INTO label SET ${fields.join(' = ?, ')}`,
                values,
                (error, dbres)=> {
                    if(!error) {
                        res.json({Last_id: dbres.insertId})
                    } else {
                        console.log( ' DAO ERROR ', error)
                    }
                }
            )
        }
    },
    update: (req, res)=> {
        const fields = Object.keys(req.body) 
        const values = Object.values(req.body)
        
        con.query(`UPDATE label SET ${fields.join(' = ?, ')} = ?`,
        values,
        (error, dbres)=> {
            if(!error) {
                res.send(`Changed ${dbres.changedRows} row(s)`)
            } else {
                console.log(' DAO ERROR ', error)
                res.send('Error updating record')
            }
        }
        )
    },
    sort: (req, res)=> {
        con.query(
            `SELECT * FROM label ORDER BY label`,
            (error, rows)=> {
                if(!error) {
                    if(rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log(' DAO ERROR ', error)
                }
            }
        )
    }
}

module.exports = labelDao