import SignUp from '../models/signUp.js';

const getAllData = async (req, res) => {
  try {
    const data = await SignUp.find({}).sort({ createdAt: -1 });

    res.json(data).status(200);
  } catch (error) {
    res.json({ error: error.message });
  }
};

const postData = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const signUp = await SignUp.create({
      firstName,
      lastName,
      email,
      password,
    });
    res.json(signUp).status(200);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export { getAllData, postData };
