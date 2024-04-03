export const getUser = async function (req, res) {
    const id = req.params.id;

    try {
        // Buscar el usuario en la colección 'usuarios'
        const user = await db.collection('users').findOne({ _id: ObjectId(id) });

        if (!user) {
            console.log("User not found");
            res.status(204).json({ estado: true, data: [] });
        } else {
            console.log("User found");
            res.status(200).json({ estado: true, data: user });
        }
    } catch (error) {
        console.error("Error to get user:", error);
        res.status(500).send("Server Error");
    }
};

