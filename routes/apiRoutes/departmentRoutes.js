const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

// Get all departments
router.get('/departments', (req, res) => {
    const sql = `SELECT departments.*`
})