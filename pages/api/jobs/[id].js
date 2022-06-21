import { getJobs } from "../../../data/jobs";

export default function handleId(req, res) {
  try {
    if (req.method !== "GET") {
      return res.status(400).json({ message: "Bad Request" });
    }

    const { id } = req.query;
    const filterd = getJobs.filter(
      (item) => parseInt(id) === parseInt(item.id)
    );
    
    if (filterd.length > 0) {
      res.status(200).json(filterd[0]);
    } else {
      res.status(404).json({ message: `Description width id ${id} not found!` });
    }
  } catch (err) {
    return res
      .status(500)
      .json({ error: "Something went wrong when sending message!" });
  }
}
