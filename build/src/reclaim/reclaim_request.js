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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const js_sdk_1 = require("@reclaimprotocol/js-sdk");
const provider_id_1 = require("../config/provider_id");
const env_1 = __importDefault(require("../config/env"));
/**
 * function to create request url for proof creation
 * @param {object} req
 * @param {object} res
 * @returns Promise<array>
 * @throws Error
 */
function reqhandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        if (req.method === 'POST') {
            const { sessionId, addressUser, messageUser, provider } = req.body;
            console.log(provider_id_1.providerIds[provider]);
            if (sessionId == "" || addressUser == "" || messageUser == "" || provider == "")
                throw new Error("Missing input values");
            const reclaimClient = new js_sdk_1.Reclaim.ProofRequest(env_1.default.reclaim.id, sessionId);
            reclaimClient.addContext(addressUser, messageUser);
            if (provider_id_1.providerIds[provider] == undefined)
                throw new Error("Incorrect provider value");
            yield reclaimClient.buildProofRequest(provider_id_1.providerIds[provider]);
            reclaimClient.setSignature(yield reclaimClient.generateSignature(env_1.default.reclaim.secret));
            const { requestUrl, statusUrl } = yield reclaimClient.createVerificationRequest();
            res.status(200).send([requestUrl.toString(), statusUrl.toString()]);
        }
        else {
            res.status(500).send({ error: "Incorrect method" });
        }
    });
}
exports.default = reqhandler;
