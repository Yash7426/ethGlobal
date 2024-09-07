"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
const provider_id_1 = require("../config/provider_id");
const requiredValue = 'MOBILE_SUBMITTED';
/**
 * function to request the proof value
 * @param {object} req
 * @param {object} res
 * @returns Promise<array>
 * @throws Error
 */
function datahandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!res.socket.server.io) {
            console.log('*First use, starting Socket.IO');
            const io = new socket_io_1.Server(res.socket.server);
            const requiredValue = 'MOBILE_SUBMITTED';
            io.on('connection', (ws) => __awaiter(this, void 0, void 0, function* () {
                console.log("hey");
                console.log("hey");
                let data;
                console.log('WebSocket connected');
                ws.on('message', (statusUrl, item) => __awaiter(this, void 0, void 0, function* () {
                    if (statusUrl == "" || item == "")
                        throw new Error("Empty statusUrl");
                    console.log('Received message from client:', statusUrl);
                    // Handle the received message as needed
                    while (true) {
                        try {
                            const response = yield fetch(statusUrl);
                            data = yield response.json();
                            if (data.session.status === requiredValue) {
                                console.log((data.session.proofs[0].extractedParameterValues[provider_id_1.providerValues[item]]));
                                break;
                            }
                            // await new Promise(resolve => setTimeout(resolve, 5000)); // 5 seconds
                        }
                        catch (err) {
                            console.log("Error fetching: ", err);
                            ws.emit("basicEmit", false, "error in fetching");
                        }
                    }
                    ws.emit("basicEmit", true, (data.session.proofs[0].extractedParameterValues[provider_id_1.providerValues[item]]));
                }));
                ws.on('disconnect', () => {
                    console.log("WebSocket discoonected");
                });
            }));
            // Listen for connection events
            // io.on('connection', (socket) => {
            //     console.log(`Socket ${socket.id} connected.`);
            //     // Listen for incoming messages and broadcast to all clients
            //     socket.on('message', (message,v) => {
            //          io.emit('basicEmit', message,v);
            //     });
            //     // Clean up the socket on disconnect
            //     socket.on('disconnect', () => {
            //         console.log(`Socket ${socket.id} disconnected.`);
            //     });
            // });
            res.socket.server.io = io;
            console.log("end");
        }
        res.end();
    });
}
exports.default = datahandler;
