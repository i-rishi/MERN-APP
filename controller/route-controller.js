import User from "../schema/schema.js";

export const addUser = async (req, res) => {
  const newUser = new User(req.body);
  try {
    await newUser.save();
    res.status(200).json({ newUser });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const getUser = await User.find({});
    res.status(200).json(getUser);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const getUser = await User.findById(req.params.id);
    res.status(200).json(getUser);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const editUser = async (req, res) => {
  const editUser = new User(req.body);
  try {
    await User.updateOne({ _id: req.params.id }, editUser);
    res.status(200).json({ editUser });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.status(200).json({ msg: "User deleted successfully." });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};
