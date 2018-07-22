new Vue({
    el: "#app",
    data: {
        title: "Hola el Mundo!",
        link: "http://google.com"
    },
    methods: {
        changeTitle: function(event) {
            this.title = event.target.value;
        },
        omg: function() {
            return "omg lolz", this.title;
        }
    }
});

new Vue({
    el: "#exercise",
    data: {
        name: "Cat",
        age: 11,
        src: "https://assets.rbl.ms/4166588/980x.jpg"
    },
    methods: {
        rando: function() {
            return Math.random();
        }
    }
})