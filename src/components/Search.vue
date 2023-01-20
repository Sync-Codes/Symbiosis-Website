<template>
  <div>
    <input type="text" id="query" v-on:keyup.enter="getData" v-model="query" placeholder="Search characters..">
    <button @click="getData" >Search</button>
  </div>
</template>

<script>
export default {
    name: "Search",
    data() {
    return {
      query: "",
      baseUrl: "https://api.genshin.dev/characters/",
      imageType: "card"
    }
  },
    methods: {
        async getData() {
            const chName = this.query.toLowerCase();
            const character = await fetch(`${this.baseUrl}${chName}`);
            const img = `${this.baseUrl}${chName}/${this.imageType}`
            const chData = await character.json();
            console.log(chData, img);
        }
    }
}
</script>
