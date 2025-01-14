import messageModel  from './../models/message.model.js';
export const sendMessage = async(req, res) => {
    const { message } = req.body;
    const senderId = req.user;
    const receiverId = req.params;
    
    
  

    console.log(message, senderId);
}