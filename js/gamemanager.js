console.log('Game Starting...');
let data = new Date; let horaAtual = data.getHours() + ':' + data.getMinutes() + ":" + data.getSeconds();
let playerTurnEnded = false; let enemyTurnEnded = false;
let PlayerAction; let EnemyAction;
const setAttackAction = function(){PlayerAction = "atk";removeMoves();GameActions();playerTurnEnded=true;};
const setDefenseAction = function(){PlayerAction = "def";removeMoves();GameActions();playerTurnEnded=true;};
const setSkillAction = function(){PlayerAction = "skl";removeMoves();GameActions();playerTurnEnded=true;};
const removeMoves = function(){let getPlayerMoves = document.querySelector(".playerMoves");getPlayerMoves.style.visibility = "hidden";};
const returnMoves = function(){let getPlayerMoves = document.querySelector(".playerMoves");getPlayerMoves.style.visibility = "visible";};    

const logToBottom = function() {
  let getBattleLog = document.querySelector(".battleLog"); 
  getBattleLog.scrollTo(0, document.body.scrollHeight);
};

const WinCondition = async() => {
  let getEnemyBarHealth = document.querySelector(".enemyBarHealth"); 
  let getEnemyHealth = document.querySelector(".enemyHealthP");
  let getBattleLogP = document.querySelector(".battleLog p"); 
  let getEnemyImg = document.querySelector(".grid2 img"); 
  let getQuitDiv = document.querySelector(".quitDiv"); 
  let getAtkDiv = document.querySelector(".atkDiv");
  let getDefDiv = document.querySelector(".defDiv");
  let getSklDiv = document.querySelector(".sklDiv");

  getEnemyImg.style.backgroundImage = "linear-gradient(180deg, dimgrey, transparent)";getEnemyHealth.innerHTML = "Vida: 0";getEnemyBarHealth.value = "0";
  getBattleLogP.innerHTML += "<br/><strong>FIM DA BATALHA!</strong><br/>" +  player.classType  + " venceu em " + turns + " turnos!";
  getAtkDiv.style.visibility = "hidden"; getDefDiv.style.visibility = "hidden"; getSklDiv.style.visibility = "hidden"; getQuitDiv.innerHTML = '<input type="button" name="quit" id="quitbutton" value="Sair!" onClick="document.location.reload(true)"/>';        
  logToBottom();
  await delay(1000);
  alert("Você venceu!");
};
const LoseCondition = async() => {    
  let getPlayerBarHealth = document.querySelector(".playerBarHealth");  
  let getPlayerHealth = document.querySelector(".playerHealthP");   
  let getBattleLogP = document.querySelector(".battleLog p");  
  let getPlayerImg = document.querySelector(".grid1 img");  
  let getQuitDiv = document.querySelector(".quitDiv"); 
  let getAtkDiv = document.querySelector(".atkDiv");
  let getDefDiv = document.querySelector(".defDiv");
  let getSklDiv = document.querySelector(".sklDiv");

  getPlayerImg.style.backgroundImage = "linear-gradient(180deg, dimgrey, transparent)"; getPlayerHealth.innerHTML = "Vida: 0"; getPlayerBarHealth.value = 0;
  getBattleLogP.innerHTML += "<br/><strong>FIM DA BATALHA!</strong><br/>" +  enemy.enemyClassType  + " venceu em " + turns + " turnos!";
  getAtkDiv.style.visibility = "hidden"; getDefDiv.style.visibility = "hidden"; getSklDiv.style.visibility = "hidden"; getQuitDiv.innerHTML = '<input type="button" name="quit" id="quitbutton" value="Sair!" onClick="document.location.reload(true)"/>';  
    logToBottom();
  await delay(1000);
  getQuitDiv.innerHTML = '<input type="button" name="quit" id="quitbutton" value="Sair!" onClick="document.location.reload(true)"/>';
  getPlayerImg.style.backgroundImage = "linear-gradient(180deg, dimgrey, transparent)";
  alert("Você foi derrotado!");
}
let GameMain = {
    setGameStart: function(classType) {
        this.selectClass(classType);         
        this.clearBattlegroud();
        this.createTheBattlegroud();
        this.cssGameInterface();
        this.enemyChange();
    },
    selectClass: function(classType) {
        switch (classType) {
            case "Samurai":
                player = new Player(classType, 120, 100, 35, 19);
                break;
            case "Arqueiro":
                player = new Player(classType, 80, 100, 45, 8);
                break;
            case "Cavaleiro":
                player = new Player(classType, 140, 100, 30, 18);
                break;
            case "Monge":
              player = new Player(classType, 160, 60, 26, 26);
              break;
            case "Freira":
            player = new Player(classType, 140, 80, 28, 24);
            break;
        }

        let getPlayerInterface = document.querySelector(".playerInterface");
        getPlayerInterface.innerHTML = '<div id="playerNameDiv"> <p>Jogador:   <span class="playerName"> Yasuke</span></p> </div><div class="playerMain"><img src="images/' + classType.toLowerCase() + 'jogador.png" class="playerImg"><aside class="playerStats"><p><strong>Classe: </strong><br> <span class="classe">' + classType + '</span></p> <p><strong class="attributeP">Atributos:</strong> <br> <span class="playerHealthP">Vida: ' + player.health + '</span> <br> <span class="playerShieldP">Escudo: ' + player.shield + '</span> <br> Ataque: ' + player.attack + ' <br> <span class="playerDefenseP">Defesa: ' + player.defense + '</></div>      <div class="playerHealth"> <p>Vida: </p> <progress class="playerBarHealth" value="' + player.health + '" max="' + player.health + '"> </progress> </div> <hr><div class="playerMoves"> <div class="atkDiv"><input type="button" name="atacar" id="atkbutton" value="Atacar" onClick="setAttackAction()"/></div><div class="defDiv"><input type="button" name="defense" id="defbutton" value="Defender" onClick="setDefenseAction()"/></div> <div class="sklDiv"><input type="button" name="skill" id="sklbutton" value="Habilidade" onClick="setSkillAction()"/></div> <div class="quitDiv"><input type="button" name="quit" id="quitbutton" value="Fugir!" onClick="document.location.reload(true)"/></div> </div>';

        console.log(classType + " selected!");
    },
    enemyChange: function() {
        let chooseEnemy = Math.floor(Math.random() * Math.floor(8));      
          switch (chooseEnemy) {
            case 0:
              enemy = new Enemy("Hanzo", 100, 100, 30, 22);
              break;
            case 1:
              enemy = new Enemy("Ninja", 80, 100, 32, 10);
              break;
            case 2:
              enemy = new Enemy("Cavaleiro", 120, 100, 34, 20);
              break;              
            case 3:
              enemy = new Enemy("Gozen", 140, 100, 36, 20);
              break;              
            case 4:
              enemy = new Enemy("Raider", 120, 100, 40, 16);
              break;
            case 5:
              enemy = new Enemy("Wako", 120, 100, 40, 18);
              break;
            case 6:
              enemy = new Enemy("Benkei", 150, 100, 32, 22);
              break;
            case 7:
              enemy = new Enemy("Seigen", 140, 100, 34, 24);
              break;
         }
    },
    clearBattlegroud: function() {
        let cleaningGroud = document.querySelector("main").remove();

        console.log("Battleground cleaned!");
    },
    createTheBattlegroud: function() {
        let getFooterBattleground = document.querySelector(".footerInterface");
        getFooterBattleground.innerHTML = '<a href="#" onclick="GameMain.enemySide()" class="searchOpponent">Procurar Oponente!</a>';

        console.log("The new Battleground has been created!");
    },
    cssGameInterface: function() {
        /* let cssGame = document.querySelector("#gameInterface");
        cssGame.style.boxShadow = "0px 0.5px 3px black";
        cssGame.style.backgroundColor = "#d5d5d5f7"; */
        let cssGame = document.querySelector(".mainContainer");
        cssGame.style.display = "block";
    },
    enemySide: function() {
        let getHeaderBattleground = document.querySelector(".headerInterface");
        getHeaderBattleground.innerHTML = '<div id="enemyNameDiv">             <p>Inimigo:   <span class="enemyName"> ' + enemy.enemyClassType + '</span></p>         </div>        <div class="enemyMain"><img src="images/' + enemy.enemyClassType.toLowerCase() + 'inimigo.png" alt="enemy" /><aside class="enemyStats">            <p><strong>Classe: </strong><br /> <span class="classe">' + enemy.enemyClassType + '</span></p>            <p><strong class="attributeP">Atributos:</strong> <br> <span class="enemyHealthP">Vida: ' + enemy.health + '</span><br> <span class="enemyShieldP">Escudo: ' + enemy.shield + '</span> <br>            Ataque: ' + enemy.attack + '  <br>            Defesa: ' + enemy.defense + ' <br>            </p>          </aside></div>        <div class="enemyHealth">          <p>Vida: </p>          <progress class="enemyBarHealth" value="' + enemy.health + '" max="' + enemy.health + '"></progress> </div> <hr>';
        
        let getFooterBattleground = document.querySelector(".footerInterface");
        let getPlayerMoves = document.querySelector(".playerMoves");
        getPlayerMoves.style.visibility = "visible";
        getFooterBattleground.innerHTML = '<div class="battleLogDiv"> <div class="battleLog">  <p><span class="turns">Turno ' + turns + '</span></p></div></div>'; 
        console.log("The Enemy appears!");
         
    }
};
 //futuro gamemain 

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

