<template>
    <div class="record">
        <header>
           <h3>约课记录</h3> 
        </header>
        <div class="kong"></div>
        <div class="item">
            <van-tabs line-width='0.16rem' height="0.88rem">
                <van-tab title="待上课" name="a">
                    <div class="imm">
                        <div class="image">
                            <img src="/static/no-message.8d3ca5af.png" alt="">
                        </div>
                        <p>还没有待上课记录哦</p>
                        <button @click="tbut()">立即约课</button>
                    </div>
                </van-tab>
                <van-tab title="已上课" name="b">
                    <div class="imm">
                        <div class="image">
                            <img src="/static/no-message.8d3ca5af.png" alt="">
                        </div>
                        <p>还没有上课记录哦</p>
                        <button @click="tbut()">立即约课</button>
                    </div>
                </van-tab>
                <van-tab title="已取消" name="c">
                    <div class="imm">
                        <div class="image">
                            <img src="/static/no-message.8d3ca5af.png" alt="">
                        </div>
                        <p>还没有取消上课记录哦</p>
                        
                    </div>
                </van-tab>
            </van-tabs>
        </div>
        


    </div>
</template>

<script>
    export default {
        name: "record",
        data(){
            return{

            }
        },
        methods:{
            tbut(){
                this.$router.push('/oto')
            }
        }
    }
</script>

<style lang='scss'>
.record{
    width: 100%;
    height: 100%;
    background: #f0f2f5;
    header{
        z-index: 1000;
        width: 100%;
        height: 0.88rem;
        text-align: center;
        line-height: 0.88rem;
        font-size: 0.31rem;
        background: #fff;
        color: #595959;
        position: absolute;
        top: 0;
        h3{
            font-weight: normal;
        }
    }
    .kong{
        height: 0.88rem;
    }
    .item{
        height: 0.88rem;
       .van-ellipsis{
           height: 0.88rem;
           line-height: 0.88rem;
           font-size: 0.3rem;
       }
       .van-tab{
           height: 0.88rem;
       }
       .van-tabs__nav--line{
           height: 0.88rem;
       }
       .van-tabs{
           height: 0.88rem;
       }
       .van-tabs--line .van-tabs__wrap{
           height: 0.88rem;
       }
    }
    .imm{
        width: 100%;
        height: 100%;
        overflow: auto;
        background: #f0f2f5;
        .image{
            width: 3.58rem;
            height: 2.58rem;
            margin: 2rem auto 0.2rem;
            
            img{
                width: 100%;
                height: 100%;
                display: block;
                
            }
        }
        p{
            color: #b7b7b7;
            height: 0.4rem;
            text-align: center;
            font-size: 0.28rem;
            margin-bottom: 0.5rem;
        }
        button{
            width: 1.76rem;
            height: 0.56rem;
            background: #eb6100;
            border: none;
            border-radius: 5px;
            color: #fff;
            font-size: 0.3rem;
            margin: 0 auto;
            display: block;
        }
    }
}

</style>
