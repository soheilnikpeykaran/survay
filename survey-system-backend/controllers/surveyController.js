const pool = require('../models/db');

// ایجاد نظرسنجی
exports.createSurvey = async (req, res) => {
    const { title, description } = req.body;
    try {
        const newSurvey = await pool.query(
            'INSERT INTO surveys (title, description) VALUES ($1, $2) RETURNING *',
            [title, description]
        );
        res.json(newSurvey.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};
