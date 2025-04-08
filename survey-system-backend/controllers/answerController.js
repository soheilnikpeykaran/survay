const pool = require('../models/db');

// ذخیره پاسخ
exports.submitAnswer = async (req, res) => {
    const { questionId, answerText } = req.body;
    try {
        const newAnswer = await pool.query(
            'INSERT INTO answers (question_id, user_id, answer_text) VALUES ($1, $2, $3) RETURNING *',
            [questionId, req.user, answerText]
        );
        res.json(newAnswer.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};
