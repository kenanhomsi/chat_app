import Conversation from "../models/conversation.module.js";
import Message from "../models/message.module.js";
export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    // await conversation.save();
    // await newMessage.save();
    //this will run in parall
    await Promise.all([conversation.save(), newMessage.save()]);
    res.status(200).json(newMessage);
  } catch (error) {
    console.log("error in sendMessage controller ", error.message);
    res.status(500).json({ error: "internal server error" });
  }
};
export const getMessage = async (req, res) => {
  try {
    const { id: userToChatWithcId } = req.params;
    const senderId = req.user._id;
    const conversiation = await Conversation.findOne({
      participants: {
        $all: [senderId, userToChatWithcId],
      },
    }).populate("messages");
    if (!conversiation) return res.status(200).json([]);
    const messages = conversiation.messages;
    res.status(200).json(messages);
  } catch (error) {
    console.log("error in getMessage controller ", error.message);
    res.status(500).json({ error: "internal server error" });
  }
};
