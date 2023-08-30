<template>
  <h1>Its Page 1 - Відправка даних до бази</h1>
  <form>
    <Label>Імя</Label>
    <input 
        v-model="name"
        type="text" 
        name="" 
        id="name"
        >
    <button @click="sendName">Send Name to DB</button>
    <hr>
    <Label>Прізвище</Label>
    <input 
        v-model="surname"
        type="text" 
        name="" 
        id="name"
    >
    <button @click="sendSurName">Send Surname to DB</button>
    <hr>
    <Label>Вік</Label>
    <input 
        v-model="age"
        type="text" 
        name="" 
        id="age"
    >
    <button @click="sendAge">Send Age to DB</button>
        <!-- <div>
          <div><span>Name:</span> {{ name }} </div> 
          <div><span>Surname:</span>{{ surname }}</div>
          <div><span>Age:</span>{{ age }}</div>
        </div> -->
   


  </form>
  <RouterLink to="page2">To Page2</RouterLink>
</template>

<script>
import {db} from '../firebase'
import { doc, setDoc } from "firebase/firestore"; 
export default {
  name: 'PageOne',
  data: () => {
     return {
      name: '',
      surname: '',
      age: ''
     }
   },
   methods:{
    async sendName(event){
      event.preventDefault()

      const userRef = doc(db, 'users', 'vipUser');
      await setDoc(userRef, {
        name: this.name,
      },
      { merge: true});
      this.name = ""
    },
    async sendSurName(event){
      event.preventDefault()
      console.log(this.surname);

      const userRef = doc(db, 'users', 'vipUser');
      await setDoc(userRef, { 
        surname: this.surname 
      }, 
      { merge: true });//{ merge: true } додає до існуючих даних { surname: this.surname }



      this.surname = ""
    },
    async sendAge(event){
      event.preventDefault()
      const userRef = doc(db, 'users', 'vipUser');
      await setDoc(userRef, { 
        age: this.age 
      }, 
      { merge: true });//{ merge: true } додає до існуючих даних {  age: this.age  }



      this.surname = ""
    }
   }
}
</script>
<style scoped>
form{ 
  max-width: 350px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  }
  label{
    margin-bottom: 10px;
    text-align: left;
  }
  input{
    padding: 15px;
    font-size: 22px;
    border-radius: 8px;
  }
  button{
    padding: 10px;
    margin-top: 20px;
    background-color: aquamarine;
  }
  button:last-child{
    margin-bottom: 50px;
  }
  hr{
    width: 100%;
    height: 2px;
    background-color: black;
    margin-bottom: 20px;
  }
  div{
    margin-top: 10px;
    text-align: left;
    }
    span{
      color: blueviolet;
      text-decoration: underline;
      font-size: 12px;
      }
</style>
