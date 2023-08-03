<template>
    <center><h1> KATEGORI</h1></center>
    <div class="flex-container">
        <div v-for="kategori in cek" :key="kategori.id" class="card">
        <img :src="getImgSrc(kategori.img)" alt="Category Image"/>
        <router-link class="container" :to="{ name: 'DetailE' , params: { id_kategori: kategori.id } }">
        <h4>{{  kategori.nama  }}</h4>
        </router-link>
        </div>
    </div>
  </template>

  <script>
  import { onMounted, reactive} from 'vue'
  import { kategori } from '@/assets/kategori.js'

  export default {
      setup(props, context){
        const cek = reactive(kategori["kategori"]);

            const getImgSrc = (imgFileName) => {
                return '../src/assets/img/' + imgFileName + '';
            };

          onMounted(() => {
              context.emit("id-menu", 5)
          })

          return {
            cek,
            getImgSrc
          }
      },
  }
  </script>

  <style scoped>

.card{
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
transition: 0.3s;
margin: 10px;
min-width: 140px;
cursor: pointer;
}

.card:hover {
    box-shadow: 0 8px 16 px 0 rgba(0, 0, 0, 0.2);
}

.container {
    padding: 2px 16px;
}
img{
  width: 100px;
  height: 100px;
}
.flex-container {
text-align: center;
display: flex;
}
</style>