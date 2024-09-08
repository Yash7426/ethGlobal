import type { NextApiRequest, NextApiResponse } from 'next'

import {providerValues} from "../../../config/provider_id"

/**
 * function to request the proof value
 * @param {object} req 
 * @param {object} res 
 * @returns Promise<array>
 * @throws Error
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const {statusUrl, item} = req.body as IReclaimDataInput
    if(statusUrl == "" || item == "") throw new Error("Empty statusUrl")
    console.log(item)
    await pollApi(req.body,res);
  } else {
    res.status(500).send({error : "Incorrect method"})
  }
}

/**
 * function called after sometime to continuosly check for data 
 * 
 */
async function pollApi(req : IReclaimDataInput, res : NextApiResponse) {
  const requiredValue = 'MOBILE_SUBMITTED'; 
  const response = await fetch(req.statusUrl);
  const data = await response.json()
  if (data.session.status !== requiredValue) {
      setTimeout(() => pollApi(req,res), 5000); // Poll again after 5 seconds (adjust as needed)
    } else {
      console.log(data.session.proofs[0])
      res.status(200).send([true,(data.session.proofs[0].extractedParameterValues[providerValues[req.item]])]);
    }
  }
