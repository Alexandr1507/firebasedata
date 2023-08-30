<template>
  <RouterLink to="/">Back to page1</RouterLink>
  <h1>Its Page 2 Отримання даних з бази</h1>
    <div>
      <p>Імя з бази:</p> <span>{{ userName }}</span>
      <br>
      <p>Прізвище з бази:</p><span>{{ userSurName }}</span>
      <br>
      <p>Вік з бази:</p><span>{{ userAge }}</span>
  </div>
  <button @click="getUserData">Отримати дані</button>
  <hr>
  <RouterLink to="page3">To page3</RouterLink>

</template>

<script>
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase'

export default {
  name: 'PageTwo',
  data: () => {
     return {
      userName: '',
      userSurName: '',
      userAge: ''
     }
   },
   methods:{
    async getUserData(event){
      event.preventDefault()

      const docRef = doc(db, "users", "vipUser");
      const docSnap = await getDoc(docRef);
      



      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
       this.userName = docSnap.data().name;
       this.userSurName = docSnap.data().surname;
       this.userAge = docSnap.data().age;


      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }

     
    }
  }
}
</script>
<style scoped>
div{
  text-align: left;
}
p{
  display: inline-block;
  max-width: 150px;
  width: 100%;
  margin: 5px 0;
}
span{font-size: 25px;}
button{
  padding: 10px 15px;
  font-size: 20px;
  border-radius: 8px;
  background-color: aquamarine;
}
</style>
