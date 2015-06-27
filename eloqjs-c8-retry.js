function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
    if (Math.random() < 0.5)
        return a * b;
    else
        throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
    for (;;) {
        try {
            return primitiveMultiply(a, b);
        } catch (err) {
            if (! err instanceof MultiplicatorUnitFailure) {
                throw err;
            }
        }
    }
}

console.log(reliableMultiply(8, 8));
// → 64
