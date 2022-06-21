import { getJobs } from "../../data/jobs";

export default function handler(req, res) {
  try {
    if (req.method !== "GET") {
      return res.status(400).json({ message: "Bad Request" });
    }
    res.status(200).json({ getJobs });
  } catch (err) {
    return res.status(500).json({ error: "Something went wrong!" });
  }
}
