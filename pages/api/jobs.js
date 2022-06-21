import {getJobs} from "../../data/jobs"

export default function handler(req, res) {
    
    if (req.method === "GET"){
      res.status(200).json({getJobs});
    }else{
      res
          .status(400)
          .json({ message: 'Bad Request' });
    }    
  }