// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';

export default function handler(req, res) {
  // console.log(req)
  fs.readFile("../../blogdata/learnflask.json", ()=>{
    
  })
  res.status(200).json({ name: 'This is next js page!' })
}
 