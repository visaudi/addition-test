const add = (x, y) => x + y;

test("addition", function () {
    expect(add(3, 5)).toBe(8);
    expect(add(1, 5)).toBe(6);
});

