let vue = new Vue ({
    el: '#app',
    data: {
        monsterHealth: 100,
        playerHealth: 100,
        gameActive: false,
        fightLog: []
    },
    computed: {
        playerHealthCss: function() {
            return {
                width: this.playerHealth + '%'
            }
        }
    },
    methods: {
        attack: function() {
            this.monsterHealth -= Math.floor(Math.random() * 10)
            this.playerHealth -= Math.floor(Math.random() * 7)
        }
    }
})

