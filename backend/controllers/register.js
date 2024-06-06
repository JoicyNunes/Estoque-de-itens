import { db } from "../db.js";

export const getRegistrations = (_, res) => {
    const q = "SELECT * FROM crud.register";

    db.query(q, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json(err);
        }

        console.log(data);
        return res.status(200).json(data);
    });
};

export const addRegistrations = (req, res) => {
    const q =
    "INSERT INTO `crud`.`register`(`ID`, `NAME`, `DESCRIPTION`, `AMOUNT`,`SALE_PRICE`) VALUES(?)";

    const values =  [
        req.body.ID,
        req.body.NAME,
        req.body.DESCRIPTION,
        req.body.AMOUNT,
        req.body.SALE_PRICE,
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json()
    });
};

export const updateRegistrations = (req, res) => {
    const q = 
    "UPDATE `crud`.`register` SET `ID` = ?, `NAME` = ?, `DESCRIPTION` = ?, `AMOUNT` = ?, `SALE_PRICE` = ? WHERE `ID` = ?";

    const values =  [
        req.body.ID,
        req.body.NAME,
        req.body.DESCRIPTION,
        req.body.AMOUNT,
        req.body.SALE_PRICE,
    ];

    db.query(q, [...values, req.params.ID], (err) => {
        if (err) return res.json(err);

        return res.status(200).json()
    });
};

export const deleteRegistrations = (req, res) => {
    const q = "DELETE FROM `crud`.`register` WHERE `ID` = ?";

    db.query(q, [req.params.ID], (err) => {
        if (err){
            return res.json(err);
        } 
        return res.status(200).json()
    });
};


