<template>
    <div class="lsh_login">
      <div class="lsh_content">
        <div class="lsh_logo">
          <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png" alt="">
        </div>
        <div class="lsh_message">
          <p :class="[lsh_active==1?'lsh_active':'']"><input v-model="lsh_phone" @blur="lsh_active=0" @focus="lsh_active=1" maxlength="11" placeholder="请输入手机号" type="number"></p>
          <p :class="[lsh_active==2?'lsh_active':'']"><input v-model="lsh_password" placeholder="请输入密码" @blur="lsh_active=0" @focus="lsh_active=2" type="password"></p>
        </div>
        <div class="lsh_other">
          <span>找回密码</span>
          <span>注册/验证码登录</span>
        </div>
      </div>
      <div @click="lsh_yz()" class="lsh_loginbutton">
        <span>登录</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
          return{
            lsh_active:0,
            lsh_password:"",
            lsh_phone:""
          }
        },

      methods:{
          lsh_yz(){
            var lsh_re = /^1\d{10}$/;
            let lsh_str = this.lsh_phone;
            if(!lsh_re.test(lsh_str)){
              this.$toast('手机格式不正确');
              return
            }
            var lsh_password = /\w{6,}$/;
            var lsh_yz = this.lsh_password;
            if(!lsh_password.test(lsh_yz)){
              this.$toast('密码格式不正确');
              return
            }
            this.$store.commit("add",lsh_str);
            this.$router.push("/person")
          }
        },
    }
</script>

<style lang="scss" scoped>
  .lsh_loginbutton{
    width: 80%;
    margin: 0 auto;
    height: 0.9rem;
    background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAsAAACECAYAAAD2k6KpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTA4NTY0QkFCNzM3MTFFOTlEMzU4OTdFRjlDNjMxNjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTA4NTY0QkJCNzM3MTFFOTlEMzU4OTdFRjlDNjMxNjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCNzRCQjQyN0I3MzIxMUU5OUQzNTg5N0VGOUM2MzE2MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCNzRCQjQyOEI3MzIxMUU5OUQzNTg5N0VGOUM2MzE2MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pu/n5g8AAAwlSURBVHja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") no-repeat;
    background-size: 100% 100%;
    text-align: center;
    line-height: 0.9rem;
    color: white;
    font-size: 0.3rem;
    margin-top: 0.6rem ;
  }
  .lsh_other{
    height: 0.8rem;
    display: flex;
    font-size: 0.26rem;
    justify-content: space-between;
    color: gray;
    line-height: 0.8rem;
  }
  .lsh_content{
    padding: 0 1rem;
    padding-top: 1.5rem;
    img{
      width: 4.83rem;
      height: 1.03rem;
    }
    .lsh_message{
      margin-top: 1.3rem;
      p{
        width: 100%;
        border-bottom: 0.01rem solid #f0f2f5;
        input{
          width: 80%;
          padding: 0.2rem 0;
          border: none;
          height: 0.5rem;
        }
        ::-webkit-input-placeholder{
          font-size: 0.3rem;
          color: darkgrey;
        }
      }
    }
  }
  .lsh_active{
    border-bottom: 1px solid orangered !important;
  }
</style>
