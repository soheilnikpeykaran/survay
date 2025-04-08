const pool = require('../models/db');

// ایجاد سوال
exports.createQuestion = async (req, res) => {
    const { surveyId, questionText } = req.body;
    try {
        const newQuestion = await pool.query(
            'INSERT INTO questions (survey_id, question_text) VALUES ($1, $2) RETURNING *',
            [surveyId, questionText]
        );
        res.json(newQuestion.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};
