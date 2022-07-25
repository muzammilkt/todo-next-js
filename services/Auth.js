import axios from "axios";

const Register = async (data) => {
  const create = await axios.post("user/register", data);
  return create;
};

export { Register };
