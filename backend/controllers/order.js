import { db } from "../db.js";

export const getOrders = (_, res) => {
    const q = `
        SELECT o.ID, o.NAME, o.ADDRESS, o.PHONE, o.EMAIL, o.STATUS,
        JSON_ARRAYAGG(JSON_OBJECT('REGISTER_ID', oi.REGISTER_ID, 'AMOUNT', oi.AMOUNT)) AS ITEMS
        FROM \`order\` o
        LEFT JOIN order_items oi ON o.ID = oi.ORDER_ID
        GROUP BY o.ID
    `;

    db.query(q, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json(err);
        }

        return res.status(200).json(data);
    });
};

export const addOrder = (req, res) => {
    const q = "INSERT INTO `order` (`NAME`, `ADDRESS`, `PHONE`, `EMAIL`, `STATUS`) VALUES (?)";
    const values = [
        req.body.NAME,
        req.body.ADDRESS,
        req.body.PHONE,
        req.body.EMAIL,
        req.body.STATUS
    ];

    db.query(q, [values], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json(err);
        }
    
        const orderId = result.insertId;
        const items = req.body.ITEMS.map(item => [orderId, item.REGISTER_ID, item.AMOUNT]);

        const itemQuery = "INSERT INTO order_items (`ORDER_ID`, `REGISTER_ID`, `AMOUNT`) VALUES ?";
        db.query(itemQuery, [items], (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json(err);
            }

            return res.status(200).json("");
        });
    });
};

export const updateOrder = (req, res) => {
    const q = "UPDATE `order` SET `NAME` = ?, `ADDRESS` = ?, `PHONE` = ?, `EMAIL` = ?, `STATUS` = ? WHERE `ID` = ?";
    const values = [
        req.body.NAME,
        req.body.ADDRESS,
        req.body.PHONE,
        req.body.EMAIL,
        req.body.STATUS,
        req.params.ID
    ];

    db.query(q, values, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json(err);
        }

        const deleteItemQuery = "DELETE FROM order_items WHERE `ORDER_ID` = ?";
        db.query(deleteItemQuery, [req.params.ID], (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json(err);
            }

            const items = req.body.ITEMS.map(item => [req.params.ID, item.REGISTER_ID, item.AMOUNT]);
            const itemQuery = "INSERT INTO order_items (`ORDER_ID`, `REGISTER_ID`, `AMOUNT`) VALUES ?";
            db.query(itemQuery, [items], (err) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json(err);
                }

                return res.status(200).json("");
            });
        });
    });
};

export const deleteOrder = (req, res) => {
    const q = "DELETE FROM `order` WHERE `ID` = ?";
    db.query(q, [req.params.ID], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json(err);
        }

        const deleteItemQuery = "DELETE FROM order_items WHERE `ORDER_ID` = ?";
        db.query(deleteItemQuery, [req.params.ID], (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json(err);
            }

            return res.status(200).json("");
        });
    });
};