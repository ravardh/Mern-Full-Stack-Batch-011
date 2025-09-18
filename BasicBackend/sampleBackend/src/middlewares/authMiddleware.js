export const LoginCheck = (req,res,next)=>{
    try {
        console.log("Login Checked")
        next()
    } catch (error) {
        res.status(401).json({message:"Please Login First"})
    }
}