import { BigInt } from "@hyperoracle/zkgraph-lib";
import { Bytes } from "@hyperoracle/zkgraph-lib";

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

  export {
    add,
    sub,
    mul,
    div,
    mod,
    min,
    max,
    sqrt
  };