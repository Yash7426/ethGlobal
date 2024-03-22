
export interface IReclaimInput {
    sessionId : any  ,
    addressUser : string ,
    messageUser : string,
    provider : string
}

export interface IReclaimDataInput {
    statusUrl : string,
    item : string
}

export interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: boolean, b: string) => void;
  }
  
export  interface ClientToServerEvents {
    message: (statusUrl : string, item: string) => void;
  }
  
export  interface InterServerEvents {
    ping: () => void;
  }
  
  
  