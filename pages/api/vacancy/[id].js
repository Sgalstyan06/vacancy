import { getJobs } from "../../../data/jobs";

export default function handleId (req, res){   

    const {id} = req.query;
    const filterd = getJobs.filter(item => parseInt(id) === parseInt(item.id))
    if (req.method === 'GET')   {
        res.status(200).json(filterd[0])
    }    
}


