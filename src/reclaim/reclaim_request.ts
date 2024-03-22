import { Reclaim } from '@reclaimprotocol/js-sdk';
import type { NextApiRequest, NextApiResponse } from 'next'
import {providerIds} from '../config/provider_id'
import env from '../config/env'
import type {IReclaimInput} from '../interface/reclaim/IReclaimInput'
/**
 * function to create request url for proof creation
 * @param {object} req 
 * @param {object} res 
 * @returns Promise<array>
 * @throws Error
 */
export default async function reqhandler(req: any, res: any) {
  if (req.method === 'POST') {
    const {sessionId,addressUser,messageUser,provider} = req.body as IReclaimInput
    console.log(providerIds[provider])
    if(sessionId == "" || addressUser == "" || messageUser == "" || provider == "") throw new Error("Missing input values")
    const reclaimClient = new Reclaim.ProofRequest(
        env.reclaim.id,
        sessionId
    )

    reclaimClient.addContext(
      addressUser,
      messageUser
    )
   
     if(providerIds[provider] == undefined) throw new Error("Incorrect provider value")
     
      await reclaimClient.buildProofRequest(providerIds[provider])
      reclaimClient.setSignature(
        await reclaimClient.generateSignature(
          env.reclaim.secret
        )
      )
      const {requestUrl, statusUrl} = await reclaimClient.createVerificationRequest();
      res.status(200).send([ requestUrl.toString(), statusUrl.toString()]);
      
  } else {
    res.status(500).send({error : "Incorrect method"})
  }
}


