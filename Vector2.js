import clamp from './utils/clamp.js';

/** Class representing a 2-dimensional vector. */
export default class Vector2 {
  /**
   * Constructs a new `Vector2` object.
   * @param { number } x X-coordinate of the vector. Defaults to `0`.
   * @param { number } y Y-coordinate of the vector. Defaults to `0`.
   */
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  /** Shorthand for `Vector2(0, 1)`.  */
  static get up() {
    return new Vector2(0, 1);
  }

  /** Shorthand for `Vector2(0, -1)`. */
  static get down() {
    return new Vector2(0, -1);
  }

  /** Shorthand for `Vector2(1, 0)`. */
  static get right() {
    return new Vector2(1, 0);
  }

  /** Shorthand for `Vector2(-1, 0)`. */
  static get left() {
    return new Vector2(-1, 0);
  }

  /** Shorthand for `Vector2(1, 1)`. */
  static get one() {
    return new Vector2(1, 1);
  }

  /** Shorthand for `Vector2(0, 0)`. */
  static get zero() {
    return new Vector2();
  }

  /** The squared length of this vector. */
  get magnitudeSquared() {
    return this.x ** 2 + this.y ** 2;
  }

  /** The length of this vector. */
  get magnitude() {
    return Math.sqrt(this.magnitudeSquared);
  }

  /** This vector with a magnitude of `1`. */
  get normalized() {
    const magnitude = this.magnitude || 1;

    return new Vector2(this.x / magnitude, this.y / magnitude);
  }

  /**
   * Sets the x and y coordinates of the vector.
   * @param { number } x The x-coordinate to set.
   * @param { number } y The y-coordinate to set.
   * @returns { this } The updated `Vector2` object.
   */
  set(x, y) {
    this.x = x;
    this.y = y;

    return this;
  }

  /**
   * Sets the X and Y coordinates of the vector to the same scalar value.
   * @param { number } scalar The scalar value to set.
   * @returns { this } The updated `Vector2` object.
   */
  setScalar(scalar) {
    this.x = scalar;
    this.y = scalar;

    return this;
  }

  /**
   * Creates a new instance of a vector and assigns it the x and y of the current vector.
   * @returns { Vector2 } A new instance of a `Vector2` with the current x and y values.
   */
  clone() {
    return new Vector2(this.x, this.y);
  }

  /**
   * Checks if this vector equals to given vector.
   * @param { Vector2 } vector
   * @returns { boolean }
   */
  equals(vector) {
    return (this.x === vector.x) && (this.y === vector.y);
  }

  /** Returns a string with this vector's components. */
  toString() {
    return `(${this.x}, ${this.y})`;
  }

  /**
   * Adds another vector to this vector.
   * @param { Vector2 } vector The vector to add to this vector.
   * @returns { this } The updated `Vector2` object.
   */
  add(vector) {
    this.x += vector.x;
    this.y += vector.y;

    return this;
  }

  /**
   * Adds scalar to this vector.
   * @param { number } scalar The scalar to add to this vector.
   * @returns { this } The updated `Vector2` object.
   */
  addScalar(scalar) {
    this.x += scalar;
    this.y += scalar;

    return this;
  }

  /**
   * Returns an addition of the vectors `a` and `b`.
   * @param { Vector2 } a The first vector.
   * @param { Vector2 } b The second vector.
   * @returns { Vector2 } An addition of the vectors.
   */
  static addVectors(a, b) {
    return new Vector2(a.x + b.x, a.y + b.y);
  }

  /**
   * Subtracts another vector from this vector.
   * @param { Vector2 } vector The vector to subtract from this vector.
   * @returns { this } The updated `Vector2` object.
   */
  subtract(vector) {
    this.x -= vector.x;
    this.y -= vector.y;

    return this;
  }

  /**
   * Subtracts scalar from the this vector.
   * @param { number } scalar The scalar to subtract from this vector.
   * @returns { this } The updated `Vector2` object.
   */
  subtractScalar(scalar) {
    this.x -= scalar;
    this.y -= scalar;

    return this;
  }

  /**
   * Returns a subtraction of two vectors.
   * @param { Vector2 } a The first vector.
   * @param { Vector2 } b The second vector.
   * @returns { Vector2 } A subtraction of the vectors.
   */
  static subtractVectors(a, b) {
    return new Vector2(a.x - b.x, a.y - b.y);
  }

  /**
   * Multiplies the current vector by another vector.
   * @param { Vector2 } vector The vector to multiply by.
   * @returns { this } The updated `Vector2` object.
   */
  multiply(vector) {
    this.x *= vector.x;
    this.y *= vector.y;

    return this;
  }

  /**
   * Multiplies the current vector by a scalar.
   * @param { number } scalar The scalar to multiply the vector by.
   * @returns { this } The updated `Vector2` object.
   */
  multiplyScalar(scalar) {
    this.x *= scalar;
    this.y *= scalar;

    return this;
  }

  /**
   * Divides the current vector by another vector.
   * @param { Vector2 } vector The vector to divide by.
   * @returns { this } The updated `Vector2` object.
   */
  divide(vector) {
    this.x /= vector.x;
    this.y /= vector.y;

    return this;
  }

  /**
   * Divides the current vector by a scalar.
   * @param { number } scalar The scalar to divide the vector by.
   * @returns { this } The current vector divided by the scalar.
   */
  divideScalar(scalar) {
    this.x /= scalar;
    this.y /= scalar;

    return this;
  }

  /**
   * Sets this vector to a magnitude of `1`.
   * @returns { this } The normalized vector.
   */
  normalize() {
    return this.divideScalar(this.magnitude || 1);
  }

  /**
   * Sets the given length to this vector.
   * @param { number } length The vector length to set.
   * @returns { this } This vector with changed length.
   */
  setLength(length) {
    return this.normalize().multiplyScalar(length);
  }

  /**
   * Floors the vector's components to the nearest integer less than or equal to the value.
   * @returns { this } The current floored vector.
   */
  floor() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);

    return this;
  }

  /**
   * Ceils the vector's components to the nearest integer greater than or equal to the value.
   * @returns { this } The current ceiling-ed vector.
   */
  ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);

    return this;
  }

  /**
   * Rounds the vector's components to the nearest integer.
   * @returns { this } The current rounded vector.
   */
  round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);

    return this;
  }

  /**
   * Negates the vector's components.
   * @returns { this } The current negated vector.
   */
  negate() {
    this.x = -this.x;
    this.y = -this.y;

    return this;
  }

  /**
   * Returns a vector that is made from the smallest components of two vectors.
   * @param { Vector2 } a The first vector.
   * @param { Vector2 } b The second vector.
   * @returns { Vector2 } The resulting vector.
   */
  static min(a, b) {
    return new Vector2(Math.min(a.x, b.x), Math.min(a.y, b.y));
  }

  /**
   * Returns a vector that is made from the largest components of two vectors.
   * @param { Vector2 } a The first vector.
   * @param { Vector2 } b The second vector.
   * @returns { Vector2 } The resulting vector.
   */
  static max(a, b) {
    return new Vector2(Math.max(a.x, b.x), Math.max(a.y, b.y));
  }

  /**
   * Computes the dot product of the vector with another vector.
   * @param { Vector2 } a The first vector.
   * @param { Vector2 } b The second vector.
   * @returns { number } The dot products between the `a` and `b` vectors.
   */
  static dot(a, b) {
    return (a.x * b.x) + (a.y * b.y);
  }

  /**
   * Reflects a vector off the vector defined by a normal.
   * @param { Vector2 } inDirection The velocity vector.
   * @param { Vector2 } inNormal
   * The vector of the normal against which the `inDirection` vector is to be reflected.
   * @returns { Vector2 } The reflected vector.
   */
  static reflect(inDirection, inNormal) {
    const factor = -2 * this.dot(inDirection, inNormal);

    return new Vector2(
      (factor * inNormal.x) + inDirection.x,
      (factor * inNormal.y) + inDirection.y,
    );
  }

  /**
   * Returns the 2D vector perpendicular to this 2D vector.
   * The result is always rotated 90-degrees in a counter-clockwise direction for
   * a 2D coordinate system where the positive Y axis goes up.
   * @param { Vector2 } inDirection The input direction.
   * @returns { Vector2 } The perpendicular direction.
   */
  static perpendicular(inDirection) {
    return new Vector2(-inDirection.y, inDirection.x);
  }

  /**
   * Gets the unsigned angle in degrees between `from` and `to`.
   * @param { Vector2 } from The vector from which the angular difference is measured.
   * @param { Vector2 } to The vector to which the angular difference is measured.
   * @returns { number } The unsigned angle in degrees between the two vectors.
   */
  static angle(from, to) {
    return Math.atan2(to.y - from.y, to.x - from.x);
  }

  /**
   * Returns the square distance between `a` and `b`.
   * @param { Vector2 } a The first vector.
   * @param { Vector2 } b The second vector.
   * @returns { number } The squared distance between `a` and `b`.
  */
  static distanceSquared(a, b) {
    return ((a.x - b.x) ** 2) + ((a.y - b.y) ** 2);
  }

  /**
   * Returns the distance between `a` and `b`.
   * @param { Vector2 } a The first vector.
   * @param { Vector2 } b The second vector.
   * @returns { number } The distance between `a` and `b`.
  */
  static distance(a, b) {
    return Math.sqrt(this.distanceSquared(a, b));
  }

  /**
   * Multiplies two vectors component-wise.
   * @param { Vector2 } a The first vector.
   * @param { Vector2 } b The second vector.
   * @returns { Vector2 } The component-wise ultiplication of the vectors `a` and `b`.
   */
  static scale(a, b) {
    return new Vector2(a.x * b.x, a.y * b.y);
  }

  /**
   * Linearly interpolates between vectors `a` and `b` by `alpha`.
   * @param { Vector2 } a The first vector.
   * @param { Vector2 } b The second vector.
   * @param { number } alpha The interpolant. Clamped to the range [0; 1].
   */
  static lerp(a, b, alpha) {
    // eslint-disable-next-line no-param-reassign
    alpha = clamp(alpha, 0, 1);

    return new Vector2(
      a.x + (b.x - a.x) * alpha,
      a.y + (b.y - a.y) * alpha,
    );
  }

  /**
   * Linearly interpolates between two vectors without clamping the interpolant.
   * @param { Vector2 } a The first vector.
   * @param { Vector2 } b The second vector.
   * @param { number } alpha The interpolant.
   */
  static lerpUnclamped(a, b, alpha) {
    return new Vector2(
      a.x + (b.x - a.x) * alpha,
      a.y + (b.y - a.y) * alpha,
    );
  }

  /**
   * Moves a point `current` towards `target`.
   * @param { Vector2 } current The current point.
   * @param { Vector2 } target The target point.
   * @param { number } maxDistanceDelta The distance to move `current` towards `target`.
   * Negative values push the vector away from `target`.
   * @returns { Vector2 } The moved vector.
   */
  static moveTowards(current, target, maxDistanceDelta) {
    const toVectorX = target.x - current.x;
    const toVectorY = target.y - current.y;

    const distSquared = toVectorX ** 2 + toVectorY ** 2;

    if (distSquared === 0 || (maxDistanceDelta >= 0 && distSquared <= maxDistanceDelta ** 2)) {
      return target;
    }

    const distance = Math.sqrt(distSquared);

    return new Vector2(
      current.x + (toVectorX / distance) * maxDistanceDelta,
      current.y + (toVectorY / distance) * maxDistanceDelta,
    );
  }
}
