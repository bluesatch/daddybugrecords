const con = require('../../config/dbconfig')

const daoCommon = require('../daoCommon')

const bandDao = {
    ...daoCommon,
    table: 'band',

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
                `INSERT INTO band SET ${fields.join(' = ?, ')}`,
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
        
        con.query(`UPDATE band SET ${fields.join(' = ?, ')} = ?`,
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
            `SELECT * FROM band ORDER BY band`,
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

module.exports = bandDao