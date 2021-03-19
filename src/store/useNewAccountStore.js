import create from "zustand"
import FormValidation from "./NewAccountFormValidation"


const useNewAccountStore = create(set =>({
    user:{
        displayName:"",
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
    },
    afterSubmit:() =>{
        set(()=>({isSubmitted:false}))
        set(()=>({user:{}}))


    }

})   
)

export default useNewAccountStore
