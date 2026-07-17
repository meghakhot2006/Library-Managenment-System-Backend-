const Book = require("../models/Book");

// Add Book
const addBook = async (req, res) => {
    try {
        const { title, author, category, isbn, availableCopies } = req.body;

        const existingBook = await Book.findOne({ isbn });

        if (existingBook) {
            return res.status(400).json({
                message: "Book already exists"
            });
        }

        const book = new Book({
            title,
            author,
            category,
            isbn,
            availableCopies
        });

        await book.save();

        res.status(201).json({
            message: "Book added successfully",
            book
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server Error"
        });
    }
};

// Get All Books
const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();

        res.status(200).json(books);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server Error"
        });
    }
};

// Get Book By ID
const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({
                message: "Book not found"
            });
        }

        res.status(200).json(book);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server Error"
        });
    }
};

// Update Book
const updateBook = async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedBook) {
            return res.status(404).json({
                message: "Book not found"
            });
        }

        res.status(200).json({
            message: "Book updated successfully",
            updatedBook
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server Error"
        });
    }
};

// Delete Book
const deleteBook = async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);

        if (!deletedBook) {
            return res.status(404).json({
                message: "Book not found"
            });
        }

        res.status(200).json({
            message: "Book deleted successfully"
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server Error"
        });
    }
};


module.exports = {
    addBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook,

};