import { db } from "../db.js";

export const getRegistrations = (_, res) => {
    const q = "SELECT * FROM crud.register";

    db.query(q, (err, data) => {
        if(err) return res.json(err);

        return res.status(200).json(data);
    });
};