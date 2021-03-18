
export default function FormValidation(user){
    let errors = {}
    if(!user.firstName){
        errors.firstName = "First Name Required"
    }
    if(!user.lastName){
        errors.lastName = "Last Name Required"
    }

    if(!user.userName){
        errors.userName= "user name  required"
    }
    if(!user.email){
        errors.email = "Email Required"
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

