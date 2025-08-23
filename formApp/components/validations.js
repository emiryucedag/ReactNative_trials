import { object, string, ref} from 'yup';

let validations = object({
  username: string().required(),
  email: string().email().required(),
  password: string().min(5).required(),
  passwordConfirm: string().oneOf([ref('password')]).required(), 

});

export default validations;