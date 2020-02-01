import { Dice } from '@app/shared/dice/dice';

describe('Dice', () => {
  let testobject: Dice;
  const allowedDeviation = 0.02;
  const numberOfRolls = 10000;
  const numberOfSides = 6;
  const fractionOfSide = 1 / numberOfSides;

  beforeEach(() => {
    testobject = new Dice({ numberOfSides });
  });

  it('should roll a random number in the range of the defaultNumberOfSides', () => {
    const countOfSidesHit: Array<number> = [];
    let isAnyRollOutOfScope = false;

    // init counterArray
    for (let i = 1; i < testobject.numberOfSides + 1; i++) {
      countOfSidesHit[i] = 0;
    }

    // roll and count
    for (let i = 0; i < numberOfRolls; i++) {
      const rollResult = testobject.roll();
      if (rollResult < 1) {
        isAnyRollOutOfScope = true;
      }
      if (rollResult > testobject.numberOfSides) {
        isAnyRollOutOfScope = true;
      }
      countOfSidesHit[rollResult] = countOfSidesHit[rollResult] + 1;
    }

    const fractionOfSidesHit = countOfSidesHit.map(value => value / numberOfRolls);
    for (let i = 1; i < testobject.numberOfSides + 1; i++) {
      expect(Math.abs(fractionOfSidesHit[i] - fractionOfSide)).toBeLessThan(allowedDeviation);
    }
  });

  it('roll against a upper threshold and win a equal amount of times', () => {
    let numberOfWins = 0;
    const thresholdRolledAgainst = 4; // should be 50% win

    // roll and count
    for (let i = 0; i < numberOfRolls; i++) {
      if (testobject.rollAgainstUpperThreshold(thresholdRolledAgainst)) {
        numberOfWins = numberOfWins + 1;
      }
    }

    const expectedWinRatio = (thresholdRolledAgainst - 1) / numberOfSides;
    const actualWinRatio = numberOfWins / numberOfRolls;
    expect(Math.abs(actualWinRatio - expectedWinRatio)).toBeLessThan(allowedDeviation);
  });

  it('roll against a lower threshold and win a equal amount of times', () => {
    let numberOfWins = 0;
    const thresholdRolledAgainst = 1; // should be 50% win

    // roll and count
    for (let i = 0; i < numberOfRolls; i++) {
      if (testobject.rollAgainstLowerThreshold(thresholdRolledAgainst)) {
        numberOfWins = numberOfWins + 1;
      }
    }

    const expectedWinRatio = thresholdRolledAgainst / numberOfSides;
    const actualWinRatio = numberOfWins / numberOfRolls;
    expect(Math.abs(actualWinRatio - expectedWinRatio)).toBeLessThan(allowedDeviation);
  });
});
