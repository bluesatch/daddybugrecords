const con = require('../../config/dbconfig')

const daoCommon = require('../daoCommon')

const albumDao = {
    ...daoCommon,
    table: 'album',

    findAlbums: (res, table)=> {
        con.query(
            `SELECT album.album_id, album.title, album.year, album.img, album.price, band.band, label.label,
            album.comments
            FROM album
            INNER JOIN band
            INNER JOIN label
            ON album.band_id = band.band_id AND album.label_id = label.label_id;`,
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
    },

    findById: (res, id) => {
        con.query(
            `SELECT album.album_id, album.title, album.year, album.img, album.price, band.band, label.label,
            album.comments
            FROM album
            INNER JOIN band
            INNER JOIN label
            ON album.band_id = band.band_id AND album.label_id = label.label_id WHERE album_id=${id}`,
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
    },

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
                `INSERT INTO album SET ${fields.join(' = ?, ')} =?`,
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
        
        con.query(`UPDATE album SET ${fields.join(' = ?, ')} = ?`,
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
            `SELECT * FROM album ORDER BY title`,
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

module.exports = albumDao