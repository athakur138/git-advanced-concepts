//  this is a sample util function

/**
 * @param array an array of objects of type T
 * @param key the key of the object to pluck
 * @returns the array of values for the key in each object
 */

export function pluck<T>(array: T[], key: keyof T): T[keyof T][] {
  return array.map((element) => element[key]);
}


/**
 * The function `roundToTwoDecimalPlaces` rounds a number to two decimal places.
 * @param {number} num - The `num` parameter in the `roundToTwoDecimalPlaces` function is a number that
 * you want to round to two decimal places.
 * @returns The function `roundToTwoDecimalPlaces` is returning a number that is rounded to two decimal
 * places.
 */
export function roundToTwoDecimalPlaces(num: number): number {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}
