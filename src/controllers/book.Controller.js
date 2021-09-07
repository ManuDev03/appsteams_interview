const postBook = async(req,res)=>{
    res.status(200).json({message: "book is added to records"})
}
const getBooks = async(req,res)=>{
    res.status(200).json({message: "All books records"})
}
const getBookById = async(req,res)=>{
    res.status(200).json({message: "individual book record"})
}
const updateBookById = async(req,res)=>{
    res.status(200).json({message: "update individual book in the record"})
}
const deleteBookById = async(req,res)=>{
    res.status(200).json({message: "delete individual book in the record"})
}


module.exports = {
    postBook,
    getBooks,
    getBookById,
    updateBookById,
    deleteBookById
  };