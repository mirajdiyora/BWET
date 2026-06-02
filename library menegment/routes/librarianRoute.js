const express = require('express');
const router = express.Router();
const Librarian = require('../models/librarian');
const bcrypt = require('bcrypt');

// ---------------- CREATE LIBRARIAN ----------------
router.post('/', async (req, res) => {
  try {
    const {
      librarianId,
      librarianName,
      librarianEmail,
      librarianPassword,
      librarianPhone
    } = req.body;

    if (!librarianId || !librarianName || !librarianEmail || !librarianPassword) {
      return res.status(400).json({
        message: "LibrarianId, LibrarianName, LibrarianEmail and LibrarianPassword are required"
      });
    }

    const librarianExists = await Librarian.findOne({ librarianId });
    if (librarianExists) {
      return res.status(400).json({ message: "Librarian already exists" });
    }

    const hashedPassword = await bcrypt.hash(librarianPassword, 10);

    const newLibrarian = new Librarian({
      librarianId,
      librarianName,
      librarianEmail,
      librarianPassword: hashedPassword,
      librarianPhone
    });

    const savedLibrarian = await newLibrarian.save();
    res.status(201).json({
      message: "Librarian added successfully",
      data: savedLibrarian
    });

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ---------------- GET ALL LIBRARIANS ----------------
router.get('/', async (req, res) => {
  try {
    const librarians = await Librarian.find();
    res.status(200).json(librarians);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------------- GET LIBRARIAN BY ID ----------------
router.get('/:librarianId', async (req, res) => {
  try {
    const librarian = await Librarian.findOne({
      librarianId: req.params.librarianId
    });

    if (!librarian) {
      return res.status(404).json({ message: "Librarian not found" });
    }

    res.status(200).json(librarian);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------------- UPDATE LIBRARIAN ----------------
router.patch('/:librarianId', async (req, res) => {
  try {
    const updates = req.body;

    if (updates.librarianPassword) {
      updates.librarianPassword = await bcrypt.hash(
        updates.librarianPassword,
        10
      );
    }

    const updatedLibrarian = await Librarian.findOneAndUpdate(
      { librarianId: req.params.librarianId },
      { $set: updates },
      { new: true }
    );

    if (!updatedLibrarian) {
      return res.status(404).json({ message: "Librarian not found" });
    }

    res.status(200).json({
      message: "Librarian updated successfully",
      data: updatedLibrarian
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ---------------- DELETE LIBRARIAN ----------------
router.delete('/:librarianId', async (req, res) => {
  try {
    const deletedLibrarian = await Librarian.findOneAndDelete({
      librarianId: req.params.librarianId
    });

    if (!deletedLibrarian) {
      return res.status(404).json({ message: "Librarian not found" });
    }

    res.status(200).json({ message: "Librarian deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
