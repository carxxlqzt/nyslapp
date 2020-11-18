<template>
<div class="titulo">
    <div>
       {{title}}
    </div>
    </div>
</template>

<script>
export default {
     data: () => {
      return {
         
}},
name:"Titulo",
props:["title"]}
</script>
<style lang="scss" scoped>
.titulo{
    width:100%;
    height:12%;
    padding:1%;
    background-color:rgb(0, 62, 68);
    color:whitesmoke;
    text-align:center;
    font-size: 30px;
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items:center;
    margin:0;

    
  }

</style>