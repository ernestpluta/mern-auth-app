const DBErrorHandler = (err) => {
    const errCode = err.message.split(" ")[0]
    // console.log(errCode)
    switch(errCode){
        case "E11000":
            err.message = "User with that email already exists."
            return err
        case "E50":
            err.message = "Request timed out"
            return err
        default:
            err.message = "Something went wrong. Please try again later."
            return err
    }
}
module.exports =  DBErrorHandler