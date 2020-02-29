<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" type="text/css" src="@/assets/styles/home.scss"></style>
<style>
	html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-size: 12px;
    font-family: '微软雅黑', Arial, sans-serif;
  }
  body {
    margin: 0 auto;
    width: 100%;
    height: 100%;
  }
  #app {
    width: 100%;
    height: 100%;
  }
  ol,ul{ list-style: none;}
  .inline-block{ display: inline-block;}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-weight: normal;
  }
  .clearfix:after { content:"."; display:block; height:0; clear:both; visibility:hidden;}
  .clearfix { display:inline-block;}
  * html .clearfix { height:1%;}
  .clearfix { display:block;}

</style>
