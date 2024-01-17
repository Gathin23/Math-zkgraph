//@ts-ignore
import { BigInt, require } from "@hyperoracle/zkgraph-lib";
import { Bytes, Block, Event } from "@hyperoracle/zkgraph-lib";
import { addr, destinationFunction } from "./constants/contract";
import {
  esig_add,
  esig_sub,
  esig_mul,
  esig_div,
  esig_mod,
  esig_min,
  esig_max,
  esig_sqrt
} from "./constants/functions";
import { add, sub, mul, div, mod, min, max, sqrt } from "./utils/basics";
import { TwoInt } from "./events/twoInt";


export function handleBlocks(blocks: Block[]): Bytes {
  let events: Event[] = blocks[0].events;

  let calculated: BigInt = BigInt.zero();
  let calculatedWithFunctionHash: Bytes = Bytes.fromHexString("0x");


  // Add 2 numbers
  let eventsByAcctEsigAdd: Event[] = blocks[0]
    .account(addr)
    .eventsByEsig(esig_add);

  if (eventsByAcctEsigAdd.length > 0) {
    const event = TwoInt.fromEvent(eventsByAcctEsigAdd[0]);
    calculated = add(
      event.a,
      event.b
    );
  }

  // Sub 2 numbers
  let eventsByAcctEsigSub: Event[] = blocks[0]
    .account(addr)
    .eventsByEsig(esig_sub);

  if (eventsByAcctEsigSub.length > 0) {
    const event = TwoInt.fromEvent(eventsByAcctEsigSub[0]);
    calculated = sub(
      event.a,
      event.b
    );
  }

  // Mul 2 numbers
  let eventsByAcctEsigMul: Event[] = blocks[0]
    .account(addr)
    .eventsByEsig(esig_mul);

  if (eventsByAcctEsigMul.length > 0) {
    const event = TwoInt.fromEvent(eventsByAcctEsigMul[0]);
    calculated = mul(
      event.a,
      event.b
    );
  }

  // Div 2 numbers
  let eventsByAcctEsigDiv: Event[] = blocks[0]
    .account(addr)
    .eventsByEsig(esig_div);

  if (eventsByAcctEsigDiv.length > 0) {
    const event = TwoInt.fromEvent(eventsByAcctEsigDiv[0]);
    calculated = div(
      event.a,
      event.b
    );
  }

  // Mod 2 numbers
  let eventsByAcctEsigMod: Event[] = blocks[0]
    .account(addr)
    .eventsByEsig(esig_mod);

  if (eventsByAcctEsigMod.length > 0) {
    const event = TwoInt.fromEvent(eventsByAcctEsigMod[0]);
    calculated = mod(
      event.a,
      event.b
    );
  }

  // Min 2 numbers
  let eventsByAcctEsigMin: Event[] = blocks[0]
    .account(addr)
    .eventsByEsig(esig_min);

  if (eventsByAcctEsigMin.length > 0) {
    const event = TwoInt.fromEvent(eventsByAcctEsigMin[0]);
    calculated = min(
      event.a,
      event.b
    );
  }

  // Max 2 numbers
  let eventsByAcctEsigMax: Event[] = blocks[0]
    .account(addr)
    .eventsByEsig(esig_max);

  if (eventsByAcctEsigMax.length > 0) {
    const event = TwoInt.fromEvent(eventsByAcctEsigMax[0]);
    calculated = max(
      event.a,
      event.b
    );
  }

  // Sqrt 1 number
  let eventsByAcctEsigSqrt: Event[] = blocks[0]
    .account(addr)
    .eventsByEsig(esig_sqrt);

  if (eventsByAcctEsigSqrt.length > 0) {
    const event = TwoInt.fromEvent(eventsByAcctEsigSqrt[0]);
    calculated = sqrt(
      event.a
    );
  }

  for (let i = events.length - 1; i >= 0; i--) {
    if (
      events[i].address == addr &&
      (events[i].esig == esig_add ||
        events[i].esig == esig_sub ||
        events[i].esig == esig_mul ||
        events[i].esig == esig_div ||
        events[i].esig == esig_mod ||
        events[i].esig == esig_min ||
        events[i].esig == esig_max ||
        events[i].esig == esig_sqrt)
    ) {

      // merging the function hash with the calculated value to create calldata
      calculatedWithFunctionHash = Bytes.fromHexString(
        destinationFunction + calculated.toHexString().padStart(64, "0")
      );

    }
  }
  return calculatedWithFunctionHash;
}
