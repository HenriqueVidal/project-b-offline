const katana = function() {
  player.attack += 8;
  player.defense -= 4;
};
const lightSword = function() {
  player.attack += 4;
};
const twoHandedSword = function() {
  player.attack += 16;
  player.defense -= 12;
};
const heavyShield = function() {
  player.defense += 5;
  player.health += 25;
  player.attack -= 5;
};
const lightShield = function() {
  player.defense += 3;
  player.health += 16;
};
const samuraiShield = function() {
  player.attack += 4;
  player.defense += 4;
  player.shield += 4;
  player.health -10;
};
const lightArmor = function() {
  player.defense += 5;
  player.shield +=10;
  player.health += 10;
  player.attack -= 3;
};
const heavyArmor = function() {
  player.defense += 10;
  player.shield += 10;
  player.health += 20;
  player.attack -= 8;
};
const samuraiHelmet = function() {
  player.attack += 2;
  player.defense += 2;
  player.health += 10;
};
const samuraiBelt = function() {
  player.attack -= 4;
  player.defense += 3;
  player.health += 15;
};