import dbConnect from '../../utils/dbConnect'
import Test from '../../models/Test'

export default async function handler(req, res) {
    await dbConnect();
    try {
        const text = await Test.create({
            text: req.body
        })
        res.status(200).json({ success: true, data:text})
    } catch (error) {
        res.status(400).json({ success: false })
    }
}