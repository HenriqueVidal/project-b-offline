let player;let turns = 1;
const delay = ms => new Promise(res => setTimeout(res, ms));



function Player(classType, health, shield, attack, defense) {
    this.classType = classType;
    this.health = health;
    this.shield = shield;
    this.attack = attack;
    this.defense = defense;
};
const GameTurn = function() {    
    let getBattleLogP = document.querySelector(".battleLog p");    
    turns++;   
    logToBottom();
    getBattleLogP.innerHTML += "<br /><span class='turns'>Turno " + turns + "</span>";
};
const PlayerHits = async() => {
        let getPlayerImg = document.querySelector(".grid1 img"); 
        let getEnemyImg = document.querySelector(".grid2 img");
        let getEnemyHealth = document.querySelector(".enemyHealthP");
        let getEnemyBarHealth = document.querySelector(".enemyBarHealth");        
        let getBattleLogP = document.querySelector(".battleLog p");    
        let getBattleLog = document.querySelector(".battleLog")
        let getAttackButton = document.querySelector("#atkbutton");

        getPlayerImg.style.backgroundImage = "linear-gradient(180deg, lightyellow, transparent)";
        getPlayerImg.style.border = "1px solid lightyellow";
        await delay(500);
        getEnemyImg.style.border = "1px solid red";
        getEnemyImg.style.backgroundImage = "linear-gradient(180deg, red, transparent)";
            //ataque jogador
        let oldAtk;
        let critChance = parseInt(Math.random() * 100);
        let critRate = 40;  let critDmg = player.attack * 1.5;
        console.log(critChance);
           if (critChance < critRate) {           
           oldAtk = player.attack;
           player.attack = critDmg;
           console.log("dano critico: " + critDmg);
           enemy.health = enemy.health - player.attack;
           enemy.health = enemy.health + enemy.defense;
           getBattleLogP.innerHTML += "<br /> Dano causado: " + (player.attack - enemy.defense);
           player.attack = oldAtk;
           } else {
            enemy.health = enemy.health - player.attack;
            enemy.health = enemy.health + enemy.defense;
            getBattleLogP.innerHTML += "<br /> Dano causado: " + (player.attack - enemy.defense);
           logToBottom();
           console.log("dano padrao");
           };

/*         enemy.health = enemy.health - player.attack;
        enemy.health = enemy.health + enemy.defense; */
        getEnemyHealth.innerHTML = "Vida: " + enemy.health;
        getEnemyBarHealth.value = enemy.health;
        await delay(100);     
        getPlayerImg.style.backgroundImage = "linear-gradient(180deg, #b0e9de, transparent)"; 
        getPlayerImg.style.border = "1px solid dimgray";
        getEnemyImg.style.border = "1px solid dimgray";
        getEnemyImg.style.backgroundImage = "linear-gradient(180deg, #b0e9de, transparent)"; 
}
/* const PlayerHits = async() => {
    let getPlayerImg = document.querySelector(".grid1 img"); 
    let getEnemyImg = document.querySelector(".grid2 img");
    let getEnemyHealth = document.querySelector(".enemyHealthP");
    let getEnemyBarHealth = document.querySelector(".enemyBarHealth");        
    let getBattleLogP = document.querySelector(".battleLog p");                
    let getAttackButton = document.querySelector("#atkbutton");

    getPlayerImg.style.backgroundImage = "linear-gradient(180deg, lightyellow, transparent)";
    getPlayerImg.style.border = "1px solid lightyellow";
    await delay(500);
    getEnemyImg.style.border = "1px solid red";
    getEnemyImg.style.backgroundImage = "linear-gradient(180deg, red, transparent)";
        //ataque jogador
    enemy.health = enemy.health - player.attack;
    enemy.health = enemy.health + enemy.defense;
    getEnemyHealth.innerHTML = "Vida: " + enemy.health;
    getEnemyBarHealth.value = enemy.health;
    getBattleLogP.innerHTML += "<br /> Dano causado: " + (player.attack - enemy.defense);
    await delay(100);        
    getPlayerImg.style.backgroundImage = "linear-gradient(180deg, #b0e9de, transparent)"; 
    getPlayerImg.style.border = "1px solid dimgray";
    getEnemyImg.style.border = "1px solid dimgray";
    let PlayerCritDmg = function() {
    let critChance = parseInt(Math.random() * 100);
    let critRate = 40;  let critDmg = player.attack * 1.5;
    console.log(critChance);
       if (critChance < critRate) {
       console.log("critico");
       } else {
       console.log("dano padrao");
       };
       return critDmg;
       };
     PlayerCritDmg();
    getEnemyImg.style.backgroundImage = "linear-gradient(180deg, #b0e9de, transparent)"; 
} */
const PlayerHitShield = async() => {
        let getPlayerImg = document.querySelector(".grid1 img"); 
        let getEnemyImg = document.querySelector(".grid2 img");
        let getEnemyShield = document.querySelector(".enemyShieldP");
        let getBattleLogP = document.querySelector(".battleLog p");
        let getBattleLog = document.querySelector(".battleLog");

        getPlayerImg.style.backgroundImage = "linear-gradient(180deg, lightyellow, transparent)";
        getPlayerImg.style.border = "1px solid lightyellow";
        await delay(500);
        getEnemyImg.style.border = "1px solid blue";
        getEnemyImg.style.backgroundImage = "linear-gradient(180deg, blue, transparent)";
            //ataque jogador
        if (enemy.shield <= 0) {
            getEnemyShield.innerHTML = "Escudo: 0";
            getBattleLogP.innerHTML += "<br/> Escudo Inimigo está quebrado!"
            PlayerHits(); 
            logToBottom();
        } else {
            enemy.shield -= player.attack;
            enemy.shield += enemy.defense;
            getEnemyShield.innerHTML = "Escudo: " + enemy.shield;
            getBattleLogP.innerHTML += "<br /> Dano causado: " + (player.attack - enemy.defense);
            logToBottom();
            await delay(100);
        };     
        if (enemy.shield <= 0) {
            getEnemyShield.innerHTML = "Escudo: 0";
        };      
        getPlayerImg.style.backgroundImage = "linear-gradient(180deg, #b0e9de, transparent)"; 
        getPlayerImg.style.border = "1px solid dimgray";
        getEnemyImg.style.border = "1px solid dimgray";
        logToBottom();

 /*        if (enemy.shield <= 0) {
            getEnemyImg.style.backgroundImage = "linear-gradient(180deg, #b0e9de, transparent)"; 
            getEnemyShield.innerHTML = "Escudo: 0";
            getBattleLogP.innerHTML += "<br/> Escudo Inimigo quebrou!"
            } else {
            getEnemyImg.style.backgroundImage = "linear-gradient(180deg, #b0e9de, transparent)"; 
        }; */
}
const EnemyHits = async() => {
        let getPlayerImg = document.querySelector(".grid1 img");
        let getEnemyImg = document.querySelector(".grid2 img");          
        let getPlayerHealth = document.querySelector(".playerHealthP");
        let getPlayerBarHealth = document.querySelector(".playerBarHealth");       
        let getBattleLogP = document.querySelector(".battleLog p");    
        let getBattleLog = document.querySelector(".battleLog"); 
        let getAttackButton = document.querySelector("#atkbutton");        
        let getPlayerMoves = document.querySelector(".playerMoves"); 

        getEnemyImg.style.backgroundImage = "linear-gradient(180deg, lightyellow, transparent)";    
        getEnemyImg.style.border = "1px solid lightyellow";
        await delay(500); 
        getPlayerImg.style.border = "1px solid red";
        getPlayerImg.style.backgroundImage = "linear-gradient(180deg, red, transparent)";
            //ataque inimigo
        player.health = player.health - enemy.attack;
        player.health = player.health + player.defense;
        getPlayerHealth.innerHTML = "Vida: " + player.health;
        getPlayerBarHealth.value = player.health;      
        getBattleLogP.innerHTML += "<br /> Dano recebido: " + (enemy.attack - player.defense);  
        await delay(100);     
        getEnemyImg.style.backgroundImage = "linear-gradient(180deg, #b0e9de, transparent)"; 
        getPlayerImg.style.border = "1px solid dimgray";
        getEnemyImg.style.border = "1px solid dimgray";        
        getPlayerImg.style.backgroundImage = "linear-gradient(180deg, #b0e9de, transparent)";
        logToBottom();
        GameTurn(); 
}
const EnemyDefense = async() => {
        let getPlayerImg = document.querySelector(".grid1 img");
        let getEnemyImg = document.querySelector(".grid2 img");          
        let getPlayerHealth = document.querySelector(".playerHealthP");
        let getPlayerBarHealth = document.querySelector(".playerBarHealth");   
        let getBattleLogP = document.querySelector(".battleLog p");
        let getBattleLog = document.querySelector(".battleLog");
        getEnemyImg.style.backgroundImage = "linear-gradient(180deg, blue, transparent)";    
        getEnemyImg.style.border = "1px solid blue";
        await delay(500); 
        getPlayerImg.style.border = "1px solid red";
        getPlayerImg.style.backgroundImage = "linear-gradient(180deg, red, transparent)";
            //ataque inimigo
        player.health = player.health - (enemy.attack / 3).toFixed();
        getPlayerHealth.innerHTML = "Vida: " + player.health;
        getPlayerBarHealth.value = player.health;      
        getBattleLogP.innerHTML += "<br /> Dano recebido: " + (enemy.attack / 3).toFixed(); 
        logToBottom();
        await delay(100);     
        getEnemyImg.style.backgroundImage = "linear-gradient(180deg, #b0e9de, transparent)"; 
        getPlayerImg.style.border = "1px solid dimgray";
        getEnemyImg.style.border = "1px solid dimgray";
        getPlayerImg.style.backgroundImage = "linear-gradient(180deg, #b0e9de, transparent)"; 
        GameTurn();
}
const EnemyHitShield = async() => {
    let getPlayerImg = document.querySelector(".grid1 img");
    let getEnemyImg = document.querySelector(".grid2 img");          
    let getPlayerHealth = document.querySelector(".playerHealthP");
    let getPlayerBarHealth = document.querySelector(".playerBarHealth");  
    let getPlayerShield = document.querySelector(".playerShieldP");     
    let getBattleLogP = document.querySelector(".battleLog p");      
    let getBattleLog = document.querySelector(".battleLog"); 
    let getShieldDiv = document.querySelector(".defDiv");   
    let getDefButton = document.querySelector("#defbutton");    

    getEnemyImg.style.backgroundImage = "linear-gradient(180deg, lightyellow, transparent)";    
    getEnemyImg.style.border = "1px solid lightyellow";
    await delay(500); 
    getPlayerImg.style.border = "1px solid blue";
    getPlayerImg.style.backgroundImage = "linear-gradient(180deg, blue, transparent)";
        //ataque inimigo        
    player.shield = player.shield - enemy.attack;
    player.shield = player.shield + player.defense;   
    getPlayerShield.innerHTML = "Escudo: " + player.shield;
    getPlayerHealth.innerHTML = "Vida: " + player.health;
    getPlayerBarHealth.value = player.health;
    getBattleLogP.innerHTML += "<br /> Dano recebido: " + (enemy.attack - player.defense) ;
    await delay(100);     
    getEnemyImg.style.backgroundImage = "linear-gradient(180deg, #b0e9de, transparent)"; 
    getPlayerImg.style.border = "1px solid dimgray";
    getEnemyImg.style.border = "1px solid dimgray";
    if (player.shield <= 0) {
        getShieldDiv.innerHTML = '<input type="button" name="defense" id="defbutton" value="Defender" onClick="noShield()" style="background-color: grey"/>';        
        getPlayerImg.style.backgroundImage = "linear-gradient(180deg, #b0e9de, transparent)";
        getBattleLogP.innerHTML += "<br/> Seu escudo quebrou!"
        logToBottom();
        getPlayerShield.innerHTML = "Escudo: 0";
    } else {  
        logToBottom();
        GameTurn();
        getPlayerImg.style.backgroundImage = "linear-gradient(180deg, #b0e9de, transparent)";
    };
}
const PlayerDefense = async() => {
    let getPlayerImg = document.querySelector(".grid1 img"); 
    let getEnemyImg = document.querySelector(".grid2 img");
    let getEnemyHealth = document.querySelector(".enemyHealthP");
    let getEnemyBarHealth = document.querySelector(".enemyBarHealth");        
    let getBattleLogP = document.querySelector(".battleLog p"); 
    let getBattleLog = document.querySelector(".battleLog"); 

    getPlayerImg.style.backgroundImage = "linear-gradient(180deg, blue, transparent)";
    getPlayerImg.style.border = "1px solid blue";
    await delay(500);
    getEnemyImg.style.border = "1px solid red";
    getEnemyImg.style.backgroundImage = "linear-gradient(180deg, red, transparent)";
        //ataque jogador
    enemy.health = enemy.health - (player.attack / 3).toFixed();
    getEnemyHealth.innerHTML = "Vida: " + enemy.health;
    getEnemyBarHealth.value = enemy.health;
    getBattleLogP.innerHTML += "<br /> Dano causado: " + (player.attack / 3).toFixed();
    await delay(100);        
    getPlayerImg.style.backgroundImage = "linear-gradient(180deg, #b0e9de, transparent)"; 
    getPlayerImg.style.border = "1px solid dimgray";
    getEnemyImg.style.border = "1px solid dimgray";
    getEnemyImg.style.backgroundImage = "linear-gradient(180deg, #b0e9de, transparent)";
      logToBottom();
}

let PlayerMoves = {
    mainAttack: async() => { 
        let playerAttack = function() {
            let baseDamage = player.attack - enemy.defense; 
            console.log("Player damage: " + baseDamage);
            return baseDamage; 
             
        }
        let enemyAttack = function() {
            let baseDamage = enemy.attack - player.defense;   
            console.log("Enemy damage: " + baseDamage); 
            return baseDamage; 
        }
        let getPlayerHealth = document.querySelector(".playerHealthP");
        let getEnemyHealth = document.querySelector(".enemyHealthP");     
        let getPlayerBarHealth = document.querySelector(".playerBarHealth");
        let getEnemyBarHealth = document.querySelector(".enemyBarHealth");        
        let getAttackButton = document.querySelector("#atkbutton");
        let getPlayerMoves = document.querySelector(".playerMoves"); 
        let getEnemyImg = document.querySelector(".grid2 img");
        let getBattleLog = document.querySelector(".battleLog");
        let getBattleLogP = document.querySelector(".battleLog p");
          //ataque jogador
        playerAttack();
        if (enemy.health<=0) {getEnemyHealth.innerHTML = "Vida: 0";getEnemyBarHealth.value= "0";};
        await delay(1000);

        if (enemy.health <= 0 ) { 
          /*   getPlayerHealth.innerHTML = "Vida: " + player.health;
            getPlayerBarHealth.value = player.health;           
            getAttackButton.remove();  
            getPlayerMoves.innerHTML = '<input type="button" name="atacar" id="atkbutton" value="Atacar"/><input type="button" name="defense" id="defbutton" value="Defender"/><input type="button" name="skill" id="sklbutton" value="Habilidade" /><input type="button" name="quit" id="quitbutton" value="Sair!" onClick="document.location.reload(true)"/>';            
            await delay(1000);
            alert("Você venceu! -main attack-"); */
        } else {
          if (playerTurnEnded) {
              //ataque inimigo
            enemyAttack(); 
          }
        }
        if (player.health <= 0 ) {
/*             getPlayerHealth.innerHTML = "Vida: 0";
            getEnemyHealth.innerHTML = "Vida: " + enemy.health;
            getPlayerBarHealth.value = player.health;           
            getAttackButton.remove();  
            getPlayerMoves.innerHTML = '<input type="button" name="atacar" id="atkbutton" value="Atacar"/><input type="button" name="defense" id="defbutton" value="Defender"/><input type="button" name="skill" id="sklbutton" value="Habilidade"/><input type="button" name="quit" id="quitbutton" value="Sair!" onClick="document.location.reload(true)"/>'; 
            await delay(1000);
            alert("Você perdeu!"); */
        } else {
            getPlayerHealth.textContent = "Vida: " + player.health;
            getPlayerBarHealth.value = player.health;
        }
        
    },
    mainDefense: async() => {        
        let playerAttack = function() {
            let baseDamage = (player.attack / 3).toFixed(); 
            console.log("Player damage: " + baseDamage);
            return baseDamage;          
    }
        let enemyAttack = function() {
            let baseDamage = enemy.attack - player.defense;   
            console.log("Enemy damage: " + baseDamage);   
            return baseDamage; 
    }
        let getPlayerShield = document.querySelector(".playerShieldP");
        let getPlayerHealth = document.querySelector(".playerHealthP");
        let getEnemyHealth = document.querySelector(".enemyHealthP");
        let getPlayerBarHealth = document.querySelector(".playerBarHealth");
        let getEnemyBarHealth = document.querySelector(".enemyBarHealth");    
        let getAttackButton = document.querySelector("#atkbutton");
        let getPlayerMoves = document.querySelector(".playerMoves");    
        let getBattleLog = document.querySelector(".battleLog");
        let getBattleLogP = document.querySelector(".battleLog p"); 
        let getEnemyImg = document.querySelector(".headerInterface");
        
        playerAttack();      
        if (enemy.health<=0) {getEnemyHealth.innerHTML = "Vida: 0";getEnemyBarHealth.value= "0";};
        await delay(1000);
        
/*             //ataque inimigo
            let enemyDamage = enemyAttack();
            player.shield = player.shield - enemy.attack;
            player.shield = player.shield + player.defense;
            getPlayerShield.innerHTML = "Escudo: " + player.shield;
            getPlayerHealth.innerHTML = "Vida: " + player.health;
            getPlayerBarHealth.value = player.health;
            EnemyHits(); */

        if (player.shield <= 0) {
            getPlayerShield.innerHTML = "Escudo: 0";                  
            player.health = player.health - enemy.attack;
            getPlayerBarHealth.value = player.health;
            getPlayerHealth.innerHTML = "Vida: " + player.health;
            getDefButton.style.backgroundColor = "grey"; 
            await delay(1000);
            alert("Seu escudo quebrou!");            

            if (player.health <= 0) {
            getPlayerHealth.innerHTML = "Vida: 0";
            getEnemyHealth.innerHTML = "Vida: " + enemy.health;
            getPlayerBarHealth.value = player.health;
            getAttackButton.remove();  
            getPlayerMoves.innerHTML = '<input type="button" name="atacar" id="atkbutton" value="Atacar"/><input type="button" name="defense" id="defbutton" value="Defender"/><input type="button" name="skill" id="sklbutton" value="Habilidade"/><input type="button" name="quit" id="quitbutton" value="Sair!" onClick="document.location.reload(true)"" />';
            await delay(1000);
            alert("Você perdeu!"); 
                } else if (enemy.health <= 0 ) { 
                getPlayerHealth.innerHTML = "Vida: " + player.health;
                getPlayerBarHealth.value = player.health;
                getEnemyHealth.innerHTML = "Vida: 0";
                getEnemyBarHealth.value= "0";            
                getAttackButton.remove();  
                getPlayerMoves.innerHTML = '<input type="button" name="atacar" id="atkbutton" value="Atacar"/><input type="button" name="defense" id="defbutton" value="Defender"/><input type="button" name="skill" id="sklbutton" value="Habilidade" /><input type="button" name="quit" id="quitbutton" value="Sair!" onClick="document.location.reload(true)"/>'; 
                await delay(1000);
                alert("Você venceu!");
                } 
        } else if (enemy.health <= 0) {        
            getPlayerHealth.innerHTML = "Vida: " + player.health;        
            getPlayerBarHealth.value = player.health;
            getEnemyHealth.innerHTML = "Vida: 0";
            getEnemyBarHealth.value = "0";
            getAttackButton.remove();
            getPlayerMoves.innerHTML = '<input type="button" name="atacar" id="atkbutton" value="Atacar"/><input type="button" name="defense" id="defbutton" value="Defender"/><input type="button" name="skill" id="sklbutton" value="Habilidade" /><input type="button" name="quit" id="quitbutton" value="Sair!" onClick="document.location.reload(true)"/>';
            await delay(1000);
            alert("Você venceu!");
        } else {  
          if(playerTurnEnded) {
              //ataque inimigo
            enemyAttack();
            };/* 
            player.shield = player.shield - enemy.attack;
            player.shield = player.shield + player.defense;   
            getPlayerShield.innerHTML = "Escudo: " + player.shield;
            getPlayerHealth.innerHTML = "Vida: " + player.health;
            getPlayerBarHealth.value = player.health; */
        }
    } 
}
