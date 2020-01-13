new Vue({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        toggleControlls: true,
        gameOver: false,
        combatLog: []
    },
    methods: {
        normalAttack: function() {
            let playerDmg = Math.floor(Math.random() * 6) + 4;
            let monsterDmg = Math.floor(Math.random() * 6) + 4;

            this.monsterHealth - playerDmg > 0 ? this.monsterHealth -= playerDmg : this.monsterHealth = 0;
            this.playerHealth - monsterDmg > 0 ? this.playerHealth -= monsterDmg : this.playerHealth = 0;

            this.combatLog.push("Player have attacked the monster for " + playerDmg);
            this.combatLog.push("Monster struck back for " + monsterDmg);
        },
        specialAttack: function() {            
            let playerDmg = Math.floor(Math.random() * 15) + 4;
            let monsterDmg = Math.floor(Math.random() * 9) + 4;

            this.monsterHealth - playerDmg > 0 ? this.monsterHealth -= playerDmg : this.monsterHealth = 0;
            this.playerHealth - monsterDmg > 0 ? this.playerHealth -= monsterDmg : this.playerHealth = 0;
            
            this.combatLog.push("Player used special attack and dealt: " + playerDmg);
            this.combatLog.push("Monster struck back for " + monsterDmg);
        },
        heal: function() {            
            let monsterDmg = Math.floor(Math.random() * 15) + 4;
            
            this.playerHealth - monsterDmg + 10 > 0 ? this.playerHealth = this.playerHealth - monsterDmg + 10 : this.playerHealth = 0;
            
            this.combatLog.push("Player healed for 10");
            this.combatLog.push("Monster struck back for " + monsterDmg);
        },
        startEndGame: function() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.combatLog = [];
            this.toggleControlls = !this.toggleControlls;
            this.gameOver = false;
        }
    },
    watch: {
        playerHealth: function() {
            if(this.playerHealth <= 0) {
                alert("You have been defeated!");
                this.gameOver = true;
            }
        },
        monsterHealth: function() {
            if(this.monsterHealth <= 0) {
                alert("You have defeated the monster!");
                this.gameOver = true;
            }
        }
    }
});