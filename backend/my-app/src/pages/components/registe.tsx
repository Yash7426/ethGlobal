import { CrossChainNameServiceRegister, CrossChainNameServiceRegister__factory } from '@/typechain-types';
import { useState } from 'react';
import { useSigner } from "@thirdweb-dev/react";
import json from  '../../../deployments/ethereumSepolia.json' 

const Register: React.FC = () => {
  // State to hold the name input
  const [name, setName] = useState<string>('');
  const [submittedName, setSubmittedName] = useState<string | null>(null);
  var signer = useSigner();
  // Function to handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmittedName(name);
    if(signer != undefined) {
        try{
    const ccnsRegister: CrossChainNameServiceRegister = CrossChainNameServiceRegister__factory.connect(json.ccnsRegister, signer);
    const check = await ccnsRegister.getFee();
    const check2 = await ccnsRegister.getBalance();
    console.log(parseInt((check._hex).toString(), 16) <parseInt((check2._hex).toString(), 16));
    console.log(parseInt((check2._hex).toString(), 16))
    const tx = await ccnsRegister.register('kash.ccns','0x5819c267306Bac6bE6a4Af2CC5EfE6743bC497ad',{gasLimit : 1000_000});
        await tx.wait();
        console.log(tx);
    }catch(e){ console.log(e);}
    } 
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Enter Your Name</h1>
      {/* Form to take name input */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />
        <button type="submit">Submit</button>
      </form>

      {/* Display the submitted name */}
      {submittedName && (
        <div style={{ marginTop: '20px' }}>
          <h2>Hello, {submittedName}!</h2>
        </div>
      )}
    </div>
  );
};

export default Register;