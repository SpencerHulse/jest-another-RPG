const Player = require("../lib/Player");

test("creates a player object", () => {
  const player = new Player("Spencer");

  expect(player.name).toBe("Spencer");
  expect(player.health).toEqual(expect.any(Number));
  expect(player.strength).toEqual(expect.any(Number));
  expect(player.agility).toEqual(expect.any(Number));
});
