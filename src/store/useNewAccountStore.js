import create from "zustand"
import FormValidation from "./NewAccountFormValidation"

const useNewAccountStore = create(set =>({
    user:{
        firstName:"",
        lastName: "",
        email:"",
        userName:"",
        password: "",
        comfimPassword:""
    },
    errors:{},
    isSubmitted: false,
    handleChange:(event) => set(state=>({
        user:({...state.user,[event.target.name]:event.target.value})
    })),
  
    handleSubmit: (event) =>{
        event.preventDefault()
        set(state =>({
            errors:FormValidation(state.user) 
        }))
        set(()=>({isSubmitted:true}))     
    }

})   
)

export default useNewAccountStore
