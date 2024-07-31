module.exports = async (req, res) => {
    var data = {
        msg : "hello gtp!"
    }
    res.status(200).json(data);
}
