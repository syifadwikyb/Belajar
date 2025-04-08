function handleQueryResult(error, result, res) {
    if (error){
        console.error(error);
        res.status(500).json({status: 500, message: "Internal Server Error"});
        return;
    }

    if (result.affectedRows === 0) {
        res.status(404).json({ status: 404, message: "Data tidak ditemukan" });
        return false;
    }
    return true;
}

module.exports = { handleQueryResult };