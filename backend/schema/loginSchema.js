import mongoose from 'mongoose';

const loginSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
  },
  { collection: 'Login-details' }
);

const Login = mongoose.model('Login', loginSchema);

export default Login;
