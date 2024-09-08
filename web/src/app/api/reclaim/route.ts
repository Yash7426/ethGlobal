import { Reclaim } from '@reclaimprotocol/js-sdk'
import { providerIds } from "../../../config/provider_id"

// API route handler for POST requests
export async function POST(req: Request) {
  try {
    // console.log(await req.json());
    const dchdh = await req.json()
    // console.log(dchdh.sessionId)
    const { sessionId, addressUser, messageUser, provider } = dchdh;
    
    // Validate input fields
    if (!sessionId || !addressUser || !messageUser || !provider) {
      throw new Error("Missing input value");
    }
    // console.log(sessionId)
     
    if (providerIds[provider] === undefined) {
      throw new Error("Incorrect provider value");
    }
    // console.log(sessionId);
    
    // Initialize Reclaim ProofRequest
    const reclaimClient = new Reclaim.ProofRequest(
      "0xAEb1C95937B6F950d25D5e070306b7D44447Ba7F",
      sessionId
    );
    // console.log(reclaimClient);
    // Add context (addressUser and messageUser)
    reclaimClient.addContext(addressUser, messageUser);
     console.log(providerIds[provider])
    // Build proof request
    await reclaimClient.buildProofRequest(providerIds[provider]);

    // Generate and set signature
    const signature = await reclaimClient.generateSignature(
      "0x33eea3fbda5b62921e37a3752d28105663894398068fe5b626d62bfe076b83f8"
    );
    reclaimClient.setSignature(signature);

    // Create verification request
    const { requestUrl, statusUrl } = await reclaimClient.createVerificationRequest();
    console.log(requestUrl)
    // Return a JSON response with request and status URLs
    return new Response(JSON.stringify([requestUrl.toString(), statusUrl.toString()]), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Not found" }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// Catch-all for other methods (e.g., GET, PUT)
export async function ANY(req: Request) {
  return new Response(JSON.stringify({ error: "Method not allowed" }), {
    status: 405,
    headers: { 'Content-Type': 'application/json' },
  });
}

