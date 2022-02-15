export default function handler(req, res) {
    const { id } = req.query;

    res.status(200).json([
        { name: 'John Doe' + id },
        { name: 'John Doe 2' + id  },
        { name: 'John Doe 3' + id }
    ]);
}
