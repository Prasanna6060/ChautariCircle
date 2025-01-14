export const sendMessage = async(req, res) => {
    const { message } = req.body;
    console.log(message);
}