> [UnityEngine.Vector2](https://docs.unity3d.com/ScriptReference/Vector2.html) written in JavaScript

## Static properties

| Name    | Description                             |
| ------- | --------------------------------------- |
| `down`  | Shorthand for writing `Vector2(0, -1)`. |
| `left`  | Shorthand for writing `Vector2(-1, 0)`. |
| `one`   | Shorthand for writing `Vector2(1, 1)`.  |
| `right` | Shorthand for writing `Vector2(1, 0)`.  |
| `up`    | Shorthand for writing `Vector2(0, 1)`.  |
| `zero`  | Shorthand for writing `Vector2(0, 0)`.  |

## Properties

| Name               | Description                                      |
| ------------------ | ------------------------------------------------ |
| `magnitude`        | The length of this vector (read only).           |
| `normalized`       | This vector with a magnitude of `1` (read only). |
| `magnitudeSquared` | The squared length of this vector (read only).   |
| `x`                | The X component of the vector.                   |
| `y`                | The Y component of the vector.                   |

## Object methods

| Name             | Description                                                                              |
| ---------------- | ---------------------------------------------------------------------------------------- |
| `add`            | Adds another vector to the vector.                                                       |
| `addScalar`      | Adds scalar to the vector.                                                               |
| `ceil`           | Ceils the vector's components to the nearest integer greater than or equal to the value. |
| `clone`          | Creates a new instance of a vector and assigns it the x and y of the current vector.     |
| `divide`         | Divides the vector by another vector.                                                    |
| `divideScalar`   | Divides the vector by scalar.                                                            |
| `equals`         | Returns true if the given vector is exactly equal to this vector.                        |
| `floor`          | Floors the vector's components to the nearest integer less than or equal to the value.   |
| `multiply`       | Multiplies the vector by another vector.                                                 |
| `multiplyScalar` | Multiplies the vector by scalar.                                                         |
| `negate`         | Negates the vector's components.                                                         |
| `normalize`      | Makes the vector have a magnitude of `1`.                                                |
| `round`          | Rounds the vector's components to the nearest integer.                                   |
| `set`            | Sets the vector's components.                                                            |
| `setLength`      | Makes the vector have a given magnitude.                                                 |
| `setScalar`      | Sets the vector's components to the same scalar value.                                   |
| `subtract`       | Subtracts another vector from the vector.                                                |
| `subtractScalar` | Subtracts scalar from the vector.                                                        |
| `toString`       | Returns a string with this vector's components.                                          |

## Static methods

| Name              | Description                                                                                                               |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `addVectors`      | Returns an addition of two vectors.                                                                                       |
| `angle`           | Gets the unsigned angle in degrees between two vectors.                                                                   |
| `distance`        | Returns the distance between two vectors.                                                                                 |
| `distanceSquared` | Returns the square distance between two vectors.                                                                          |
| `dot`             | Computes the dot product of two vectors.                                                                                  |
| `lerp`            | Linearly interpolates between two vectors by interpolant clamped to the range [0; 1].                                     |
| `lerpUnclamped`   | Linearly interpolates between two vectors without clamping the interpolant.                                               |
| `max`             | Returns a vector that is made from the largest components of two vectors.                                                 |
| `min`             | Returns a vector that is made from the smallest components of two vectors.                                                |
| `moveTowards`     | Moves a current vector towards target vector.                                                                             |
| `perpendicular`   | Returns the 2D vector perpendicular to this 2D vector. The result is rotated 90-degrees in a counter-clockwise direction. |
| `reflect`         | Reflects a vector off the vector defined by a normal.                                                                     |
| `scale`           | Multiplies two vectors component-wise.                                                                                    |
| `subtractVectors` | Returns a subtraction of two vectors.                                                                                     |
