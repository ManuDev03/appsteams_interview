const Book = require('../models/book.Model')
const postBook = async(request,response)=>{
    // console.log(`Input Received: ${JSON.stringify(request.body)}`);
    const book = new Book(request.body)
    try {
        await book.save()
        return response.status(201).json(book);

    } catch (error) {
        return response.status(500).json(error);
    }
    
}
const getBooks = async(request,response)=>{
    try {
        const book = await Book.find({})
        response.status(201).send(book)
    }
    catch(err)
    {
        response.status(500).send()
    }
}
const getBookById = async(request,response)=>{
    response.status(200).json({message: "individual book record"})
}
const updateBookById = async(request,response)=>{
    response.status(200).json({message: "update individual book in the record"})
}
const deleteBookById = async(req,res)=>{
    response.status(200).json({message: "delete individual book in the record"})
}


module.exports = {
    postBook,
    getBooks,
    getBookById,
    updateBookById,
    deleteBookById
  };