export const getTutorship = async function (req, res) {
    const id = req.params.id;

    try {
        // Buscar el usuario en la colección 'usuarios'
        const user = await db.collection('tutorships').findOne({ _id: ObjectId(id) });

        if (!user) {
            console.log("Tutorship not found");
            res.status(204).json({ estado: true, data: [] });
        } else {
            console.log("Tutorship found");
            res.status(200).json({ estado: true, data: user });
        }
    } catch (error) {
        console.error("Error to get Tutorship:", error);
        res.status(500).send("Server Error");
    }
};