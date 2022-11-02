const {createApp} = Vue;

createApp({
data(){
  return{
    hw: 'Clicca il bottone per vedere Anor Londo',
    colour: 'red',
    image: 'img/anorlondo.jpeg',
    isShow: false
  }
},
methods: {
  show(isShow){
    this.isShow = !this.isShow;

  }
}

}).mount('#app');