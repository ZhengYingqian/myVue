<template>
    <div>
        <p>{{data}}</p>
        <h5>1、 父元素设置relative。子元素设置absolute，margin-top设置父元素一半的高度</h5>
        <div class='parent1'>
            <div class='child1'> test</div>
        </div>
        <h5>2、flex布局实现</h5>
          <div class='parent2'>
            <div class='child2'> test</div>
        </div>
        <h5>3、设置父元素display：table；子元素display： table-cell，vertical-align：middle</h5>
          <div class='parent3'>
            <div class='child3'> test</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'juzhong',
    data(){
        return {
          data: 'css之垂直居中'  
        }
    }
}
</script>

<style>
.parent1{
    width: 200px;
    height: 200px; 
    background: blue;
}
.child1{
    position: absolute;
    width: 50px;
    height: 20px;
    background: red;
    margin-top: 75px;
}
.parent2{
    width: 200px;
    height: 200px;
    background: blue;
}
.child2{
    background: red;
}
.parent3{
    width: 200px;
    height: 200px;
    background: blue;
    display: table;
}
.child3{
    width: 50px;
    height: 20px;
    background: red;
    display: table-cell;
    vertical-align: middle;

}

</style>


