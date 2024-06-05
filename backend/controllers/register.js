import { db } from "../db.js";

export const getRegistrations = (_, res) => {
    const q = "SELECT * FROM crud.register";

    db.query(q, (err, data) => {
        if (err) {
            console.error("Error fetching registrations: ", err);
            return res.status(500).json(err);
        }

        console.log("Registrations fetched successfully: ", data);
        return res.status(200).json(data);
    });
};
