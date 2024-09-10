@external("env", "getEtchingById")
export declare function envGetEtchingById(id: string): i32;

@external("env", "getAddressBalancesByAddress")
export declare function envGetAddressBalancesByAddress(address: string): i32;

@external("env", "getActivitiesByAddress")
export declare function envGetActivitiesByAddress(address: string): i32;

@external("env", "getActivitiesByTxid")
export declare function envGetActivitiesByTxid(txid: string): i32;
