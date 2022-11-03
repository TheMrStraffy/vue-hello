const {createApp} = Vue;

createApp({
data(){
  return{
    hw: 'Clicca il bottone per vedere Rick e poi clicca sull`immagine',
    colour: 'red',
    path: 'img/',
    image: 'rick.jpg',
    isShow: false
  }
},
methods: {
  show(isShow){
    this.isShow = !this.isShow;
  },
  imgChange(img){
    this.image='';
    this.image = 'toxic-rick.jpeg'
  }
}

}).mount('#app');