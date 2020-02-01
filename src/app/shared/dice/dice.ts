import * as _ from 'lodash';

export class Dice {
  private numberOfSides = 6;
  private hasBeenRolled = false;
  private successful: boolean;
  private diceResult: number;

  constructor(init?: Partial<Dice>) {
    Object.assign(this, init);
  }

  /**
   * Roll the dice with defaultNumberOfSides and return the number rolled
   */
  public roll(): number {
    this.hasBeenRolled = true;
    return Math.ceil(Math.random() * this.numberOfSides);
  }

  /**
   * Roll the dice against an upper threshold.
   * @brief returns the boolean result and the diceResult
   * @param upperThreshold - threshold rolled against
   */
  public rollAgainstUpperThreshold(upperThreshold: number): boolean {
    if (_.isNil(upperThreshold)) {
      throw new Error();
    }
    this.diceResult = this.roll();
    this.successful = this.diceResult >= upperThreshold;
    return this.successful;
  }

  /**
   * Roll the dice against an lower threshold.
   * @brief returns the boolean result and the diceResult
   * @param lowerThreshold - threshold rolled against
   */
  public rollAgainstLowerThreshold(lowerThreshold: number): boolean {
    if (_.isNil(lowerThreshold)) {
      throw new Error();
    }
    this.diceResult = this.roll();
    this.successful = this.diceResult <= lowerThreshold;
    return this.successful;
  }
}
