import { object, string, ref } from 'yup';

const validations = object({
    firstName: string().required("Please Enter Your FirsName"),
    lastName: string().required("Please Enter Your LastName"),
    email: string().email("Email is invalid!").required("Please Enter Your email"),
    password: string().max(12,"Password must be no more then 12").required("Please Enter Your Password").min(8),
    passwordConfirm : string().required("Please Enter Your Confirm Password").oneOf([ref("password")],"Passwords Must Match")
    

    
  });

export default validations