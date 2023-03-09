import { object, string, ref } from 'yup';

const validations = object({
    firstName: string().required("Please Enter Your FirsName"),
    lastName: string().required("Please Enter Your LastName"),
    email: string().email("Email is invalid!").required("Please Enter Your email"),
    password: string().max(12,"Password must be no more then 12").required("Please Enter Your Password").matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
    passwordConfirm : string().required("Please Enter Your Confirm Password").oneOf([ref("password")],"Passwords Must Match")
    

    
  });

export default validations