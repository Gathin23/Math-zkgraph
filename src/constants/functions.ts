import { Bytes} from "@hyperoracle/zkgraph-lib";

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

  export {
    esig_add,
    esig_sub,
    esig_mul,
    esig_div,
    esig_mod,
    esig_min,
    esig_max,
    esig_sqrt
  }