import { db } from "../db.js";

export const getList = (_, res) => {
    const q = "SELECT * from crud.list";

    db.query(q, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json(err);
        }
        console.log(data);
        return res.status(200).json(data);
    });
};

export const addList = (req, res) => {
    const q = 
    "INSERT INTO `crud`.`list` (`LIST`) VALUES(?)";

    const values = [
        req.body.LIST
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200),json()
    });
};

export const updateList = (req, res) => {
    const q =
    "UPDATE `crud`.`list` SET `ID` = ?, `LIST` = ? WHERE `ID` = ?";

    const values = [
        req.body.ID,
        req.body.LIST,
    ];

    db.query(q, [...values, req.params.ID], (err) => {
        if (err) return res.json(err);

        return res.status(200).json()
    });
};

export const deleteList = (req, res) => {
    const q =
    "DELETE FROM `crud`.`list` WHERE `ID` = ?";

    db.query(q, [req.params.ID], (err) => {
        if (err) {
            return res.json(err);
        }
        return res.status(200).json()
    });
};