//@ts-ignore
import { BigInt, require } from "@hyperoracle/zkgraph-lib";
import { Bytes, Block, Event } from "@hyperoracle/zkgraph-lib";

let addr = Bytes.fromHexString("0xa60ecf32309539dd84f27a9563754dca818b815e");
let esig_add = Bytes.fromHexString(
  "0x52e92d4898337244a39bd42674ac561eadfd3959e947deec1c0ab82dd58b5a75"
);
let esig_sub = Bytes.fromHexString(
  "0x52e92d4898337244a39bd42674ac561eadfd3959e947deec1c0ab82dd58b5a75"
);
let esig_mul = Bytes.fromHexString(
  "0x52e92d4898337244a39bd42674ac561eadfd3959e947deec1c0ab82dd58b5a75"
);
let esig_div = Bytes.fromHexString(
  "0x52e92d4898337244a39bd42674ac561eadfd3959e947deec1c0ab82dd58b5a75"
);
let esig_mod = Bytes.fromHexString(
  "0x52e92d4898337244a39bd42674ac561eadfd3959e947deec1c0ab82dd58b5a75"
);
let esig_min = Bytes.fromHexString(
  "0x52e92d4898337244a39bd42674ac561eadfd3959e947deec1c0ab82dd58b5a75"
);
let esig_max = Bytes.fromHexString(
  "0x52e92d4898337244a39bd42674ac561eadfd3959e947deec1c0ab82dd58b5a75"
);
let esig_sqrt = Bytes.fromHexString(
  "0x52e92d4898337244a39bd42674ac561eadfd3959e947deec1c0ab82dd58b5a75"
);

export function handleBlocks(blocks: Block[]): Bytes {
  let events: Event[] = blocks[0].events;

  let calculated: BigInt = BigInt.zero();

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
      const destinationFunction = "0xc0406226".concat(calculated.toHex());

      // append the calculated value with the destination function hash
      const calculatedWithFunctionHash = Bytes.fromHexString(
        destinationFunction.concat(calculated.toHex())
      );

      return calculatedWithFunctionHash;
    }
  }

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
