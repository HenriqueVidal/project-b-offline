let enemy;
function Enemy(enemyClassType, health, shield, attack, defense) {
    this.enemyClassType = enemyClassType;
    this.health = health;
    this.shield = shield;
    this.attack = attack;
    this.defense = defense;
}
const EnemySkill = async() => {  
  let getEnemyImg = document.querySelector(".grid2 img"); 
  let getEnemyHealth = document.querySelector(".enemyHealthP");
  let getEnemyBarHealth = document.querySelector(".enemyBarHealth");
  let getEnemyName = document.querySelector(".enemyName");
  let getBattleLogP = document.querySelector(".battleLog p");
    //Valor cura
  enemy.health += 5;            
  getEnemyHealth.innerHTML = "Vida: " + enemy.health;        
  getEnemyBarHealth.value = enemy.health;
  getEnemyImg.style.backgroundImage = "linear-gradient(180deg, green, transparent)";
  await delay(100);    
  getEnemyImg.style.backgroundImage = "linear-gradient(180deg, #b0e9de, transparent)";
  await delay(100);
  getEnemyImg.style.backgroundImage = "linear-gradient(180deg, green, transparent)";
  await delay(100);
  getEnemyImg.style.backgroundImage = "linear-gradient(180deg, #b0e9de, transparent)";
  await delay(500);
  getBattleLogP.innerHTML += "<br/>Inimigo" + getEnemyName.textContent + " ganhou 5 de vida!";
  logToBottom();
  GameTurn();
};  




let enemyChooseAtk = async() => {
  let enemyAtk = Math.floor(Math.random() * Math.floor(5));
  switch(enemyAtk){
    case 0:
      EnemyAction = "atk";
      break;
    case 1:
      EnemyAction = "def";
      break;
    case 2:
      EnemyAction = "skl";
      break;
    case 3:
      EnemyAction = "def";
      break;
    case 4:
      EnemyAction = "def";
      break;
  }
   return EnemyAction; 
};

