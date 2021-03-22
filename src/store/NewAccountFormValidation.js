
export default function FormValidation(user){
    let errors = {}
    if(!user.displayName){
        errors.displayName = "Display Name Required"
    }else if((user.displayName).length <5){
        errors.displayName = "Display Name must be ataleast 5 characters"
    }

    if(!user.userName){
        errors.userName= "user name  required"
    }else if((user.userName).length < 5){
        errors.userName = "user name must be at least 5 characters "
    }

    if(!user.password){
        errors.password = "password required"
    }else if((user.password).length < 6){
        errors.password = "password must be atleast 6 characters"
    }
    if (!user.comfirmPassword){
        errors.comfirmPassword = "please comfirm password"
    }else if(user.comfirmPassword !== user.password){
        errors.comfirmPassword = "passwords do not match "

    }
    return errors;
}

