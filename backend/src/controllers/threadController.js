import Thread from "../models/threadModel.js";

const saveThread = async (req, res) => {
  const { userId, title, createdAt, updatedAt } = req.body;

  if (!userId || !title) {
    return res
      .status(400)
      .json({ message: "User's id and title are required", success: false });
  }

  try {
    const newThread = new Thread({
      userId: userId,
      title: title,
      createdAt: createdAt || Date.now(),
    });

    const savedThread = await newThread.save();
    return res
      .status(200)
      .json({ message: "Thread saved", success: true, thread: savedThread });
  } catch (err) {
    return res.status(500).json({ message: err, success: false });
  }
};

const deleteThread = async (req, res) => {
  const { threadId } = req.body;
  if (!threadId) {
    return res
      .status(400)
      .json({ message: "Thread id is required", success: false });
  }

  try {
    const deletedThread = await Thread.findByIdAndDelete(threadId);

    console.log(deletedThread, "=>deleted thread");

    if (!deletedThread) {
      return res
        .status(400)
        .json({ message: "thread not found", success: false });
    }

    return res
      .status(200)
      .json({ message: "Thread deleted successfully", success: true });
  } catch (err) {
    return res.status(500).json({ message: err, success: false });
  }
};

const updateThread = async (req, res) => {};

const getAllThread = async (req, res) => {

    try{
        const allThreads = await Thread.find();
         return res
      .status(200)
      .json({ message: "fetched all thread successfully", success: true, threads : allThreads });
    }catch (err) {
    return res.status(500).json({ message: err, success: false });
  }

};

export default {
  saveThread,
  deleteThread,
  getAllThread,
  updateThread
};
