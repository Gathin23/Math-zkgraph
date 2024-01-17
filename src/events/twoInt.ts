// @ts-ignore
import { Event, Bytes } from "@hyperoracle/zkgraph-lib"

export class TwoInt {
  public a: Bytes
  public b: Bytes

  constructor(
    a: Bytes,
    b: Bytes
  ) {
    this.a = a;
    this.b = b;
  }

  /**
   * Creates a Transfer object from an Event.
   *
   * @param {Event} event - The Event object to convert. - TwoInt (a, b)
   * @return {TwoInt} The created TwoInt object.
   */
  static fromEvent(event: Event): TwoInt {
    let a = event.topic1;
    let b = Bytes.fromHexString("0x0");

    if (event.topic2 != Bytes.fromHexString("0x")) {
        b = event.topic2;
    }

    return new TwoInt(
      a,b
    )
  }
}