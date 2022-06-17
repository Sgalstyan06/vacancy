import {data} from "./data/allData"

export default function handler(req, res) {
    res.status(200).json({data});
  }