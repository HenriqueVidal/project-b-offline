const noSkill = () => {       
    let getBattleLogP = document.querySelector(".battleLog p");
    getBattleLogP.innerHTML += "<br/> Sem Habilidade disponível!";
    logToBottom();
};
const noShield = () => {       
    let getBattleLogP = document.querySelector(".battleLog p");
    getBattleLogP.innerHTML += "<br/> Seu escudo está quebrado!";
    logToBottom();
};

const SamuraiSkill = async() => {  
    let getPlayerImg = document.querySelector(".grid1 img"); 
    let getPlayerHealth = document.querySelector(".playerHealthP");
    let getPlayerBarHealth = document.querySelector(".playerBarHealth");
    let getPlayerName = document.querySelector(".playerName");
    let getBattleLogP = document.querySelector(".battleLog p");
    let getSkillButton = document.querySelector(".sklDiv");
      //Valor cura
    player.health += 25;            
    getPlayerHealth.innerHTML = "Vida: " + player.health;        
    getPlayerBarHealth.value = player.health;
    /*getPlayerBarHealth.max = player.health;*/
    getSkillButton.innerHTML = '<input type="button" name="skill" id="sklbutton" value="Habilidade" onClick="noSkill()" style="background-color: grey"/>';
    getPlayerImg.style.backgroundImage = "linear-gradient(180deg, green, transparent)";
    await delay(100);    
    getPlayerImg.style.backgroundImage = "linear-gradient(180deg, #b0e9de, transparent)";
    await delay(100);
    getPlayerImg.style.backgroundImage = "linear-gradient(180deg, green, transparent)";
    await delay(100);
    getPlayerImg.style.backgroundImage = "linear-gradient(180deg, #b0e9de, transparent)";
    await delay(500);
    getBattleLogP.innerHTML += "<br/>Jogador" + getPlayerName.textContent + " ganhou 25 de vida!";
    logToBottom();
    /* EnemyHits(); */
};
const CavaleiroSkill = async() => {  
    let getPlayerImg = document.querySelector(".grid1 img"); 
    let getPlayerShield = document.querySelector(".playerShieldP");
    let getPlayerName = document.querySelector(".playerName");
    let getBattleLogP = document.querySelector(".battleLog p");
    let getSkillButton = document.querySelector(".sklDiv");
      //Valor de aumento escudo
    player.shield += 20;            
    getPlayerShield.innerHTML = "Escudo: " + player.shield;        
    /*getPlayerBarHealth.max = player.health;*/
    getSkillButton.innerHTML = '<input type="button" name="skill" id="sklbutton" value="Habilidade" onClick="noSkill()" style="background-color: grey"/>';
    getPlayerImg.style.backgroundImage = "linear-gradient(180deg, blue, transparent)";
    await delay(100);    
    getPlayerImg.style.backgroundImage = "linear-gradient(180deg, #b0e9de, transparent)";
    await delay(100);
    getPlayerImg.style.backgroundImage = "linear-gradient(180deg, blue, transparent)";
    await delay(100);
    getPlayerImg.style.backgroundImage = "linear-gradient(180deg, #b0e9de, transparent)";
    await delay(500);
    getBattleLogP.innerHTML += "<br/>Jogador" + getPlayerName.textContent + " recuperou 20 de escudo!";
    logToBottom();
    /* EnemyHits(); */
};
const ArqueiroSkill = async() => {  
    let getEnemyImg = document.querySelector(".grid2 img"); 
    let getPlayerName = document.querySelector(".playerName");
    let getBattleLogP = document.querySelector(".battleLog p"); 
    let getSkillButton = document.querySelector(".sklDiv");
    
    getSkillButton.innerHTML = '<input type="button" name="skill" id="sklbutton" value="Habilidade" onClick="noSkill()" style="background-color: grey"/>';
      //ataque duplo
    PlayerHits();await delay(200);PlayerHits();await delay(200);
    getEnemyImg.style.backgroundImage = "linear-gradient(180deg, red, transparent)";
    await delay(100);
    getEnemyImg.style.backgroundImage = "linear-gradient(180deg, #b0e9de, transparent)";
    await delay(100);
    getEnemyImg.style.backgroundImage = "linear-gradient(180deg, red, transparent)";
    await delay(100);
    getEnemyImg.style.backgroundImage = "linear-gradient(180deg, #b0e9de, transparent)";
    getBattleLogP.innerHTML += "<br/>Jogador" + getPlayerName.textContent + " usou Ataque duplo!";
    getEnemyImg.style.backgroundImage = "linear-gradient(180deg, #b0e9de, transparent)"; 
    logToBottom();
      /* EnemyHits(); */
};
const MongeSkill = async() => {  
    let getPlayerImg = document.querySelector(".grid1 img"); 
    let getPlayerDefense = document.querySelector(".playerDefenseP");
    let getPlayerName = document.querySelector(".playerName");
    let getBattleLogP = document.querySelector(".battleLog p");
    let getSkillButton = document.querySelector(".sklDiv");
      //Valor aumento def
    player.defense += 5;            
    getPlayerDefense.innerHTML = "Defesa: " + player.defense;        
    /*getPlayerBarHealth.max = player.health;*/
    getSkillButton.innerHTML = '<input type="button" name="skill" id="sklbutton" value="Habilidade" onClick="noSkill()" style="background-color: grey"/>';
    getPlayerImg.style.backgroundImage = "linear-gradient(180deg, brown, transparent)";
    await delay(100);    
    getPlayerImg.style.backgroundImage = "linear-gradient(180deg, #b0e9de, transparent)";
    await delay(100);
    getPlayerImg.style.backgroundImage = "linear-gradient(180deg, brown, transparent)";
    await delay(100);
    getPlayerImg.style.backgroundImage = "linear-gradient(180deg, #b0e9de, transparent)";
    await delay(500);
    getBattleLogP.innerHTML += "<br/>Jogador" + getPlayerName.textContent + " ganhou 5 de defesa!";
    logToBottom();
    /* EnemyHits(); */
};
const FreiraSkill = async() => {  
    let getPlayerImg = document.querySelector(".grid1 img"); 
    let getPlayerDefense = document.querySelector(".playerDefenseP");
    let getPlayerName = document.querySelector(".playerName");
    let getBattleLogP = document.querySelector(".battleLog p");
    let getSkillButton = document.querySelector(".sklDiv");
      //Valor aumento def
    player.defense += 5;            
    getPlayerDefense.innerHTML = "Defesa: " + player.defense;        
    /*getPlayerBarHealth.max = player.health;*/
    getSkillButton.innerHTML = '<input type="button" name="skill" id="sklbutton" value="Habilidade" onClick="noSkill()" style="background-color: grey"/>';
    getPlayerImg.style.backgroundImage = "linear-gradient(180deg, brown, transparent)";
    await delay(100);    
    getPlayerImg.style.backgroundImage = "linear-gradient(180deg, #b0e9de, transparent)";
    await delay(100);
    getPlayerImg.style.backgroundImage = "linear-gradient(180deg, brown, transparent)";
    await delay(100);
    getPlayerImg.style.backgroundImage = "linear-gradient(180deg, #b0e9de, transparent)";
    await delay(500);
    getBattleLogP.innerHTML += "<br/>Jogador" + getPlayerName.textContent + " ganhou 5 de defesa!";
    logToBottom();
    /* EnemyHits(); */
};


