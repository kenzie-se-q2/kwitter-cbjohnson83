
export default function FormValidation(user){
    let errors = {}
    if(!user.displayName){
        errors.displayName = "Display Name Required"
    }

    if(!user.userName){
        errors.userName= "user name  required"
    }

    if(!user.password){
        errors.password = "password required"
    }else if(user.password < 6){
        errors.password = "password must be atleast 6 characters"
    }
    if (!user.comfirmPassword){
        errors.comfirmPassword = "please comfirm password"
    }else if(user.comfirmPassword !== user.password){
        errors.comfirmPassword = "passwords do not match "

    }
    return errors;
}

