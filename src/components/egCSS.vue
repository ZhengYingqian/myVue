<template>
<div class="egCSS">
  <h1>项目总结：令牌拍中遇到的样式问题</h1>
  <section>
    <h2>1、两栏布局</h2>
    <h3>（1）父元素ul用display:flex
      <br>子元素用width:50%</h3>
    <div>
      <ul>
        <li class="twoClo">
          <img :src='imgUrl' />
          <p>this is a watch</p>
          </li>
        <li class="twoClo">
          <img :src='imgUrl' />
          <p>this is another watch </p>
        </li>
      </ul>
    </div>
    <h2>2、float</h2>
  </section>
</div>
</template>

<script>
export default {
  name: 'egCSS',
  data () {
    return {
      imgUrl: '../static/img/watch.png'
    }
  }
}
</script>
<style scoped>
li {
  list-style: none;
}
ul{
  display: flex;
  padding: 0;
}
.twoClo{
  width: 50%;
  background-color: gray;
}
</style>
<style lang="scss" scoped>

</style>
