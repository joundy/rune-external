import {
  valueReturn,
  ptrToString,
} from "@east-bitcoin-lib/smartindex-sdk/assembly";
import {
  envGetActivitiesByAddress,
  envGetActivitiesByTxid,
  envGetAddressBalancesByAddress,
  envGetEtchingById,
} from "./env";
export { allocate } from "@east-bitcoin-lib/smartindex-sdk/assembly/external";

export function get_etching_by_id(id_ptr: i32): void {
  const id = ptrToString(id_ptr);

  const etchingPtr = envGetEtchingById(id);
  const str = ptrToString(etchingPtr);

  valueReturn(str);
}

export function get_address_balances_by_address(address_ptr: i32): void {
  const address = ptrToString(address_ptr);

  const addressBalancesPtr = envGetAddressBalancesByAddress(address);
  const str = ptrToString(addressBalancesPtr);

  valueReturn(str);
}

export function get_activities_by_address(address_ptr: i32): void {
  const address = ptrToString(address_ptr);

  const activitiesPtr = envGetActivitiesByAddress(address);
  const str = ptrToString(activitiesPtr);

  valueReturn(str);
}

export function get_activities_by_txid(txid_ptr: i32): void {
  const txid = ptrToString(txid_ptr);

  const activitiesPtr = envGetActivitiesByTxid(txid);
  const str = ptrToString(activitiesPtr);

  valueReturn(str);
}
