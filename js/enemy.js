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


//futuro gamemain
let PlayerAction; let EnemyAction;

const setAttackAction = function(){PlayerAction = "atk";removeMoves();GameActions();playerTurnEnded=true;};
const setDefenseAction = function(){PlayerAction = "def";removeMoves();GameActions();playerTurnEnded=true;};
const setSkillAction = function(){PlayerAction = "skl";removeMoves();GameActions();playerTurnEnded=true;};

const removeMoves = function(){let getPlayerMoves = document.querySelector(".playerMoves");getPlayerMoves.style.visibility = "hidden";};
const returnMoves = function(){let getPlayerMoves = document.querySelector(".playerMoves");getPlayerMoves.style.visibility = "visible";};

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
let GameActions = async() =>  {
  enemyChooseAtk(); await delay(1000);
    //ações do turno
  if ((PlayerAction == "atk") && (EnemyAction == "atk")) {
    PlayerHits();await delay(1000); 
    if (enemy.health <= 0) {
      WinCondition();returnMoves();
    } else {
      EnemyHits();
    }; await delay(500);
    if (player.health <= 0) {
      LoseCondition();returnMoves();
    } else {
      await delay(1500); returnMoves(); playerTurnEnded=false;
    }
    

  } else if ((PlayerAction == "atk") && (EnemyAction == "def")) {
    PlayerHitShield();await delay(1000); 
      if (enemy.health <= 0) {
        WinCondition();returnMoves();
      } else {
        EnemyDefense();
      }; await delay(500);
      if (player.health <= 0) {
        LoseCondition();returnMoves();
      } else {
        await delay(1500); returnMoves(); playerTurnEnded=false;          
      }

  } else if ((PlayerAction == "atk") && (EnemyAction == "skl")) {
    PlayerHits();await delay(1000);      
    if (enemy.health <= 0) {
      WinCondition();returnMoves();
    } else {
      EnemySkill();
    }; await delay(500);
    if (player.health <= 0) {
      LoseCondition();returnMoves();
    } else {
      await delay(1500); returnMoves(); playerTurnEnded=false;          
    }

  } else if ((PlayerAction == "def") && (EnemyAction == "atk")) {
    PlayerDefense();await delay(1000); 
    if (enemy.health <= 0) {WinCondition();returnMoves();
    } else{
      EnemyHitShield();
    }; await delay(500);
    if (player.health <= 0){LoseCondition();returnMoves();
    }else{
      await delay(1500); returnMoves(); playerTurnEnded=false;
    }

  } else if ((PlayerAction == "def") && (EnemyAction == "def")) {
    PlayerDefense();await delay(1000); if (enemy.health <= 0) {WinCondition();returnMoves();await delay(1500);} else{EnemyHitShield();}; await delay(500);
 if (player.health <= 0){LoseCondition();returnMoves();
    }else{await delay(1500); returnMoves(); playerTurnEnded=false;
    }

  } else if ((PlayerAction == "def") && (EnemyAction =="skl")) {
    PlayerDefense();await delay(1000); if (enemy.health <= 0) {WinCondition();returnMoves();await delay(1500);} else{EnemySkill(); }; await delay(500); if (player.health <= 0){LoseCondition();returnMoves();
    }else{await delay(1500); returnMoves(); playerTurnEnded=false;
    }

  } else if ((PlayerAction == "skl") && (EnemyAction == "atk")) {
    if(player.classType == "Monge"){MongeSkill();playerTurnEnded=false;}
    else if(player.classType == "Samurai"){SamuraiSkill();playerTurnEnded=false;}
    else if(player.classType == "Arqueiro"){ArqueiroSkill();playerTurnEnded=false;}
    else if(player.classType == "Cavaleiro"){CavaleiroSkill();playerTurnEnded=false;}
    else if(player.classType == "Freira"){FreiraSkill();playerTurnEnded=false;}
    await delay(1000); 
    if (enemy.health <= 0) {returnMoves();WinCondition();} 
    else{EnemySkill();await delay(1500); returnMoves(); }

  } else if ((PlayerAction == "skl") && (EnemyAction == "def")) {
    if(player.classType == "Monge"){MongeSkill();playerTurnEnded=false;}
    else if(player.classType == "Samurai"){SamuraiSkill();playerTurnEnded=false;}
    else if(player.classType == "Arqueiro"){ArqueiroSkill();playerTurnEnded=false;}
    else if(player.classType == "Cavaleiro"){CavaleiroSkill(); playerTurnEnded=false;}
    else if(player.classType == "Freira"){FreiraSkill();playerTurnEnded=false;}
    await delay(1000);
    if (enemy.health <= 0) {returnMoves();WinCondition();} 
    else{EnemySkill();await delay(1500); returnMoves(); }

  } else { //Player skl & Enemy skl
    if(player.classType == "Monge"){MongeSkill(); playerTurnEnded=false;}
    else if(player.classType == "Samurai"){SamuraiSkill(); playerTurnEnded=false;}
    else if(player.classType == "Arqueiro"){ArqueiroSkill(); playerTurnEnded=false;}
    else if(player.classType == "Cavaleiro"){CavaleiroSkill(); playerTurnEnded=false;}
    else if(player.classType == "Freira"){FreiraSkill();playerTurnEnded=false;}
    await delay(1000);
    if (enemy.health <= 0) {returnMoves();WinCondition();} 
    else{EnemySkill(); await delay(1500); returnMoves();}
  }
};

