import { Router } from "express";
import User from "../models/userModel.js"
const router = Router()

//Get all books 
router.get("/books", async(req, res) => {
   try{
    const allBooks = await Book.find({})
    if(allBooks){
        return res.status(200).json(allBooks)
    }
    else{
        return res.status(500).json({
            msg: "No book found"
        })
    }
   }
   catch(error){
    console.log(error)
   }
})

//Get only one book.
router.get("/books/:id", async(req, res) => {
    try{
     const id = req.params.id
     const book = await Book.findById(id)
     if(book){
         return res.status(200).json(book)
     }
     else{
         return res.status(500).json({
             msg: "Book not found"
         })
     }
    }
    catch(error){
     console.log(error)
    }
 })

router.post("/user", async (req, res) => {
try{
if(!req.body.firstname || !req.body.lastname || !req.body.email){
    return res.status(400).send({
        message: "Send all required fields "
    })
}
const {firstname, lastname, email, password, checkbox} = req.body
const newUser = {
    firstname, 
    lastname,
    email, 
    password, 
    checkbox 
} 

const user = await User.create(newUser)

return res.status(201).send(user)

}
catch(error){
console.log(error)
}
}) 

router.post("/check-user", async(req, res) => {
    const {email, password } = req.body 
    //Check if the email exists  
    const user = await User.find({email}) 
    if(user){
        console.log("The user has been found")
    }    
})

//Update a book
router.put("/books/:id", async (req, res) => {
    try{
    const id = req.params.id    
    const checkBookAvailability = await Book.findById(id)
    if(!checkBookAvailability){
        return res.status(500).json({
            msg: "Book not found."
        })
    }
    const updatedBook = await Book.findByIdAndUpdate(id, req.body)   
    return res.status(200).send(updatedBook)
    }
    catch(error){
    console.log(error)
    res.status(500).json({
        mgs: "Internal server error."
    })
    }
    })  

    //Delete a book 
    router.delete("/books/:id", async(req, res) => {
        try{
            const id = req.params.id
            const book = await Book.findByIdAndDelete(id)    
            if(!book){
                return res.status(404).json({
                    Msg: "Book Not Found."
                })
            }
              return res.status(204).json({
                Msg: "Book deleted successfully."
              })            
        }
        catch(error){
            console.log(error) 
            res.status(500).json({
                Msg: "Internal Server error."
            })
        }
    })

export default router