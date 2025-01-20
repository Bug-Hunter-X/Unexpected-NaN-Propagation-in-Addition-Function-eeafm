# Unexpected NaN Propagation in JavaScript Addition Function

This repository demonstrates a common JavaScript error involving NaN propagation in an addition function that attempts to handle null values. The function works correctly for null inputs but unexpectedly produces NaN when one of the inputs is NaN. This is due to the nature of NaN in JavaScript.

## Bug Description

The provided JavaScript code demonstrates an addition function that handles null input values.  However, it fails to explicitly handle NaN (Not a Number) values. This leads to NaN propagation, resulting in unexpected NaN outputs for non-null inputs.

## Solution

The solution addresses this by adding an explicit check for NaN values and handling them appropriately (e.g., returning 0 or throwing an error). This prevents NaN from propagating and ensures that the function returns a more predictable result.
