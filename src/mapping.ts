//@ts-ignore
import { BigInt, require } from "@hyperoracle/zkgraph-lib";
import { Bytes, Block, Event } from "@hyperoracle/zkgraph-lib";

let addr = Bytes.fromHexString("0x41097cd4925848d43221dd5e6eb2191c1c27c0f0");
let esig_add = Bytes.fromHexString(
  "0x7afbe4f1c55b5f72ea356f5b4d5615831867af31454a5ca5557f315e6d11a369"
);
let esig_sub = Bytes.fromHexString(
  "0x1ec9c2c0de75ef4097bfe9cc21283021a9e36bc52b5d94da63d712924af74a32"
);
let esig_mul = Bytes.fromHexString(
  "0x60953744d2a7ef2c5813bd9192d479699f220928e95d49252323f282fb46fb15"
);
let esig_div = Bytes.fromHexString(
  "0x9a03fe1d685f78a1b7d61b32275da300ba67b8a0bc64b4f1fac8d2b8c63d23c9"
);
let esig_mod = Bytes.fromHexString(
  "0x9565b8a75e56133f2edc3765505cd4c6fbb4c80ea9db37302afdd20ab3436a03"
);
let esig_min = Bytes.fromHexString(
  "0x1c414aeb5902f71e06f384075a3fb664712792e9a9b7e9302f38298f2238ebd7"
);
let esig_max = Bytes.fromHexString(
  "0xca25333ebfbe540a04e66d957523ee9bae811e7fb45a54c9e0bd9f645a83573a"
);
let esig_sqrt = Bytes.fromHexString(
  "0xfde0e523c7c72bd4c4841fef7a42d68fb168778e410bf5873f8a7ceb09aef9f8"
);

export function handleBlocks(blocks: Block[]): Bytes {
  let events: Event[] = blocks[0].events;

  let calculated: BigInt = BigInt.zero();
  let calculatedWithFunctionHash: Bytes = Bytes.fromHexString("0x");


  // Add 2 numbers
  let eventsByAcctEsigAdd: Event[] = blocks[0]
    .account(addr)
    .eventsByEsig(esig_add);

  if (eventsByAcctEsigAdd.length > 0) {
    calculated = add(
      eventsByAcctEsigAdd[0].topic1,
      eventsByAcctEsigAdd[1].topic2
    );
  }

  // Sub 2 numbers
  let eventsByAcctEsigSub: Event[] = blocks[0]
    .account(addr)
    .eventsByEsig(esig_sub);

  if (eventsByAcctEsigSub.length > 0) {
    calculated = sub(
      eventsByAcctEsigSub[0].topic1,
      eventsByAcctEsigSub[1].topic2
    );
  }

  // Mul 2 numbers
  let eventsByAcctEsigMul: Event[] = blocks[0]
    .account(addr)
    .eventsByEsig(esig_mul);

  if (eventsByAcctEsigMul.length > 0) {
    calculated = mul(
      eventsByAcctEsigMul[0].topic1,
      eventsByAcctEsigMul[1].topic2
    );
  }

  // Div 2 numbers
  let eventsByAcctEsigDiv: Event[] = blocks[0]
    .account(addr)
    .eventsByEsig(esig_div);

  if (eventsByAcctEsigDiv.length > 0) {
    calculated = div(
      eventsByAcctEsigDiv[0].topic1,
      eventsByAcctEsigDiv[1].topic2
    );
  }

  // Mod 2 numbers
  let eventsByAcctEsigMod: Event[] = blocks[0]
    .account(addr)
    .eventsByEsig(esig_mod);

  if (eventsByAcctEsigMod.length > 0) {
    calculated = mod(
      eventsByAcctEsigMod[0].topic1,
      eventsByAcctEsigMod[1].topic2
    );
  }

  // Min 2 numbers
  let eventsByAcctEsigMin: Event[] = blocks[0]
    .account(addr)
    .eventsByEsig(esig_min);

  if (eventsByAcctEsigMin.length > 0) {
    calculated = min(
      eventsByAcctEsigMin[0].topic1,
      eventsByAcctEsigMin[1].topic2
    );
  }

  // Max 2 numbers
  let eventsByAcctEsigMax: Event[] = blocks[0]
    .account(addr)
    .eventsByEsig(esig_max);

  if (eventsByAcctEsigMax.length > 0) {
    calculated = max(
      eventsByAcctEsigMax[0].topic1,
      eventsByAcctEsigMax[1].topic2
    );
  }

  // Sqrt 1 number
  let eventsByAcctEsigSqrt: Event[] = blocks[0]
    .account(addr)
    .eventsByEsig(esig_sqrt);

  if (eventsByAcctEsigSqrt.length > 0) {
    calculated = sqrt(eventsByAcctEsigSqrt[0].topic1);
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
      const destinationFunction = "0xa444f5e9".concat(calculated.toHex());

      // append the calculated value with the destination function hash
      calculatedWithFunctionHash = Bytes.fromHexString(
        destinationFunction.concat(calculated.toHex())
      );

      
    }
  }
  return calculatedWithFunctionHash;

  function add(a: Bytes, b: Bytes): BigInt {
    let aI = BigInt.fromBytes(a);
    let bI = BigInt.fromBytes(b);

    return aI.add(bI);
  }

  function sub(a: Bytes, b: Bytes): BigInt {
    let aI = BigInt.fromBytes(a);
    let bI = BigInt.fromBytes(b);

    return aI.sub(bI);
  }

  function mul(a: Bytes, b: Bytes): BigInt {
    let aI = BigInt.fromBytes(a);
    let bI = BigInt.fromBytes(b);

    return aI.mul(bI);
  }

  function div(a: Bytes, b: Bytes): BigInt {
    let aI = BigInt.fromBytes(a);
    let bI = BigInt.fromBytes(b);

    return aI.div(bI);
  }

  function mod(a: Bytes, b: Bytes): BigInt {
    let aI = BigInt.fromBytes(a);
    let bI = BigInt.fromBytes(b);

    return aI.mod(bI);
  }

  function min(a: Bytes, b: Bytes): BigInt {
    let aI = BigInt.fromBytes(a);
    let bI = BigInt.fromBytes(b);

    return aI.gt(bI) ? bI : aI;
  }

  function max(a: Bytes, b: Bytes): BigInt {
    let aI = BigInt.fromBytes(a);
    let bI = BigInt.fromBytes(b);

    return aI.gt(bI) ? aI : bI;
  }

  function sqrt(a: Bytes): BigInt {
    let aI = BigInt.fromBytes(a);

    return aI.sqrt();
  }
}
