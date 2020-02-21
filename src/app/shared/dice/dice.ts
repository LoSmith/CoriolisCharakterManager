import * as _ from 'lodash';

export class Dice {
  public numberOfSides = 6;
  public diceResult: number;
  private successful: boolean;
  private threshold: number;
  private hasBeenRolled = false;
  private isGreaterThresholdUsed = false;
  private isLesserThresholdUsed = false;

  constructor(init?: Partial<Dice>) {
    Object.assign(this, init);
  }

  /**
   * Roll the dice with defaultNumberOfSides and return the number rolled
   */
  public roll(): this {
    this.hasBeenRolled = true;
    this.diceResult = Math.floor(Math.random() * this.numberOfSides) + 1;
    return this;
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
    this.roll();
    this.successful = this.diceResult >= upperThreshold;
    this.threshold = upperThreshold;
    this.isGreaterThresholdUsed = true;
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
    this.roll();
    this.successful = this.diceResult <= lowerThreshold;
    this.threshold = lowerThreshold;
    this.isLesserThresholdUsed = true;
    return this.successful;
  }
}
