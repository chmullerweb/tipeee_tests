//### LES COMPOSANTS ###
Vue.component('biographie', {
    //les propriétés du composant
    props: {
        type: { type: String, default: 'sucess' },
        biographie: String
    },
    //code html avec un élément parent
    template: `<div class="ui message" :class="type">{{ biographie }}</div>`
})

//écrire un component dans une variable appelée dans mon instance Vue
let biographie = {
    props: {
        type: { type: String, default: 'sucess' },
        biographie: String,
        header: String
    },
    template: `<div class="ui message" :class="type">
    <i class="close icon" @click.prevent="close"></i>
    <div class="header">{{ header }}</div>
    {{ biographie }}
    </div>`,
    methods: {
        close() {
            //j'accède à mon élément parent. Ici mon instance Vue. Le soucis c'est que mon composant ne sera plus indépendant du parent ayant en data 'alert'
            //this.$parent.$data.alert = false

            //je passe par l'évènement
            this.$emit('close')
        }
    }
}

//je définie un nouveau component count et le relie à mon instance dans components
let counter = {
    //data devient une fonction avec que le count soit dissocié et associé spécifiquement à chaque counter de mon DOM
    data: function () {
        return {
            count: 0
        }
    },
    //je crée une nouvelle propriété dans ma balise
    props: {
        start: { type: Number, default: 0 }
    },
    //je combine ma propriété avec cette fonction
    computed: {
        total: function () {
            return this.start + this.count
        }
    },
    methods: {
        increment: function () {
            this.count++
        }
    },
    template:
        `<button @click="increment">{{ total }}</button>`,
    // je peux aussi lier ma propriété avec mounted (fonction qui s'applique lors de la construction de ma balise):
    // mounted: function (){
    //    this.count = this.start
    //}

}

let formUser = {
    props: {
        value: Object
    },
    data () {
        return {
            user: {...this.value}
        }
    },
    methods: {
        save () {
            this.$emit('input', this.user)
        }
    },
    template:
        `<form class="ui form" @submit.prevent="save">
        <p><slot name="header"></slot></p>
             <div class="fiedl">
                <label for="">Prénom</label>
                <input type="text" v-model="user.firstname">
            </div>
            <div class="fiedl">
                <label for="">Nom</label>
                <input type="text" v-model="user.lastname">
            </div>
            <button class="ui button" type="submit">Envoyer</button>
            <p><slot name="footer"></slot></p>
        </form>`
}


//### LES FILTRES ###
Vue.filter('capitalize', function (value, prefix, suffix) {
    return prefix + value.toUpperCase() + suffix
})

//je déclare mon filtre dans une variable et l'appel dans mon instance Vue
let reverse = function (value) {
    return value.split('').reverse().join('')
}


//### LES DIRECTIVES ###
//Je crée une directive personnalisée en construisant un objet
Vue.directive('salut', {
    bind: function (el, binding, vnode) {
        //le comportement de la Vue
        //exemple : affiche le contenu de l'élement
        el.value = binding.value

    },
    update: function (el, binding, vnode, oldvnode) {
        console.log('update')
    }
})

//Version courte sans objet avec des propriétés
Vue.directive('salut', function (el, binding) {
    el.value = binding.value
    console.log('bind')
})

//Directive dans une variable 
let salut = function (el, binding) {
    el.value = binding.value
    console.log('bind')
}

//### LA VUE ###
//Initialiser Vue.js en rentrant en paramètre un long tableau d'options
new Vue({
    //indiquer sur quel élément greffé vue.js - faire référence à l'id de l'élément
    el: "#app",
    //lié un component à ma Vue
    components: { biographie, counter, formUser },
    //lié une directive personnalisée à ma Vue
    directives: {
        salut
    },
    //je lie la variable filtre avec mon instance
    filters: { reverse },
    // définir le state (les différentes variables de la vue)
    data: {
        message: 'Salut les gens !',
        biographie: 'Lalalali lalala',
        link: 'http://descodeuses.org',
        alert: false,
        display: true,
        success: true,
        famille: ['Jonathan', 'Marion', 'Lucas'],
        firstname: 'Jena',
        lastname: 'Delatour',
        ville: '',
        cp: 68500,
        pays: 'Italie',
        claim: "Salute !",
        user: {
            firstname: 'Monique',
            lastname: 'Koko'
        }
    },
    //Je liste ici l'ensemble des méthodes/actions de ma vue
    methods: {
        //je nomme ma méthode et écrit son action
        close: function () {
            //j'accède aux propriétés déclarées dans data avec this.
            this.success = false
        },
        addMembre: function () {
            this.famille.push = "Louise";
        },
        demo: function () {
            console.log('demo')
        },
        showAlert() {
            this.alert = true
        },
        hideAlert() {
            this.alert = false
        }

    },
    //propriété qui fait les modifs que si une variable à l'intérieur est utilisée
    computed: {
        cls: function () {
            return this.success === true ? 'success' : 'error'
        },
        fullname: {
            get: function () {
                return this.firstname + ' ' + this.lastname
            },
            set: function (value) {
                let parts = value.split(' ')
                this.firstname = parts[0]
                this.lastname = parts[1]
            }
        }
    },
    //détecte quand une variable de notre vue est modifiée
    watch: {
        ville: function (value) {

        }
    }
})