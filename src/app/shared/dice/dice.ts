import * as _ from 'lodash';

export class Dice {
  numberOfSides = 6;

  constructor(init?: Partial<Dice>) {
    Object.assign(this, init);
  }

  /**
   * Roll the dice with defaultNumberOfSides and return the number rolled
   */
  public roll(): number {
    return Math.ceil(Math.random() * this.numberOfSides);
  }

  /**
   * Roll the dice against an upper threshold.
   * @brief returns true if roll number is higher or equal to the threshold
   * @param upperThreshold - threshold rolled against
   */
  public rollAgainstUpperThreshold(upperThreshold: number): boolean {
    if (_.isNil(upperThreshold)) {
      throw new Error();
    }
    return this.roll() >= upperThreshold;
  }

  /**
   * Roll the dice against an lower threshold.
   * @brief returns true if roll number is lower  or equal to the threshold
   * @param lowerThreshold - threshold rolled against
   */
  public rollAgainstLowerThreshold(lowerThreshold: number): boolean {
    return this.roll() <= lowerThreshold;
  }
}
