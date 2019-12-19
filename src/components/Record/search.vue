<template>
  <div class="search">
      <header>
          <div class="s-left">
              <van-icon @click="go()" name="arrow-left" />
          </div>
          <input type="text" @input="add()" v-model="title" placeholder="请输入内容">
            <div class="s-right">
                <p v-show="!flag">取消</p>
                <span v-show="flag" @click="search()">搜索</span>
            </div>
      </header>
      <div class="lis" >
          <div class="l-top" v-show="!flag">
              <p>
              历史搜索
            </p>
            <van-icon @click="del()" name="delete" />
          </div>
          <div class="list">
              <p v-for="(item,key) in list" :key='key'>
                  {{item.title}}
              </p>
          </div>

      </div>
      
  </div>
</template>

<script>
export default {
    name:'search',
    data(){
        return{
            flag:false,
            title:'',
            list: JSON.parse(localStorage.getItem('to'))||[]
        }
    },
    methods:{
        go(){
            this.$router.go(-1)
        },
        add(){
            if(this.title==""){
                this.flag= false
            }else{
                 this.flag= true
            }
        },
        search(){   
            var obj={title:this.title}
            this.list.unshift(obj)
            localStorage.setItem('to',JSON.stringify(this.list))
            this.title=''
            this.flag=false;
        },
        del(){
            this.list=[]
            localStorage.removeItem('to')
        }
    }
}
</script>

<style lang='scss'>
.search{
    width: 100%;
    height: 100%;
    background: #fff;
    header{
        height: 0.95rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom: 1px solid #eaeaea;
        .s-left{
            width: 0.7rem;
           text-align: right;
           font-size: 0.4rem;
           color: #595959;
        }
        input{
            width: 4.8rem;
            height: 0.6rem;
            background: #e4e7ed;
            display: block;
            border-radius: 0.5rem;
            border: none;
            padding-left: 0.6rem;
            font-size: 0.3rem;
        }
       
        .s-right{
            width: 0.8rem;
            p{
                font-size: 0.3rem;
                color: #d2d2d1;
            }
            span{
                display: block;
                font-size: 0.3rem;
            }
        }
    }
    .lis{
        width: 6.8rem;
        margin: 0.3rem auto;
         color: #595959;
         .l-top{
             height: 0.8rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.35rem;
            p{
                font-size: 0.3rem;
                font-weight: 700;
                color: black;
            }
         }
        .list{
            width: 100%;
            p{
                display: inline-block;
                padding: 0.1rem 0.2rem;
                margin: 0.2rem 0.1rem 0;
                border-radius: 0.5rem;
                background: #f7f7f7;
                color: #333;
                font-size: 0.25rem;
            }
        }
    }
    
}

</style>