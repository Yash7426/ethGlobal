import { Server } from 'socket.io';
import {providerValues} from '../config/provider_id';
import type {ClientToServerEvents,ServerToClientEvents,InterServerEvents,IReclaimDataInput} from '../interface/reclaim/IReclaimInput'
const requiredValue = 'MOBILE_SUBMITTED'; 
/**
 * function to request the proof value
 * @param {object} req 
 * @param {object} res 
 * @returns Promise<array>
 * @throws Error
 */
export default async function datahandler(req: any, res: any) {
  if (!res.socket.server.io) {
    const httpServer = res.socket.server;
    const wss = new Server<ClientToServerEvents,ServerToClientEvents,InterServerEvents,IReclaimDataInput>(httpServer);
    wss.on('connection', async (ws) => {
      console.log("hey")
      let data
        console.log('WebSocket connected');
        ws.on('message', async(statusUrl,item) => {
          if(statusUrl == "" || item == "") throw new Error("Empty statusUrl")
          console.log('Received message from client:', statusUrl);
          // Handle the received message as needed
          while(true) {try {
            const response = await fetch(statusUrl);
             data = await response.json()
            if (data.session.status === requiredValue) {
              console.log((data.session.proofs[0].extractedParameterValues[providerValues[item]]))
              break;
            }
            
            // await new Promise(resolve => setTimeout(resolve, 5000)); // 5 seconds
          } catch (err) {
            console.log("Error fetching: " , err)
            ws.emit("basicEmit",false,"error in fetching");
          }}
          ws.emit("basicEmit",true,(data.session.proofs[0].extractedParameterValues[providerValues[item]]));
        });
        ws.on('disconnect',() =>
        {
          console.log("WebSocket discoonected")
        })
      })
    res.status(200).end();
    
  } else {
    res.status(500).send({error : "Incorrect method"})
  }
}
