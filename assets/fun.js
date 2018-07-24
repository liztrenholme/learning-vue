new Vue({
    el: "#app",
    data: {
        title: "Hola el Mundo!",
        link: "http://google.com",
        counter: 0
    },
    methods: {
        changeTitle: function(event) {
            this.title = event.target.value;
        },
        omg: function() {
            return "omg lolz", this.title;
        },
        increase: function(){
            this.counter++;
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

new Vue({
    el: '#exercise2',
    data: {
        value: ''
    },
    methods: {
    alertMe: function() {
      alert('Alert!');
      }
    }
});

new Vue ({
    el: "#cat",
    data: {
        color: "orange",
        name: "Lucy",
        age: 2
    }
})