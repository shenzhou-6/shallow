<template>
    <a-layout-header>
        <a-row>
            <a-col :span="4">ICON</a-col>
            <a-col :span="15" >
                <a-menu mode="horizontal"  theme="dark"  class="menu">
                   <a-sub-menu >
                       <span slot="title">
                            <a-icon type="profile"></a-icon>
                       内容管理
                       </span>
                       <a-menu-item>
                           <router-link :to="{name:'addArticle'}">
                               <span>新建文章</span>
                           </router-link>
                       </a-menu-item>
                   </a-sub-menu>
                </a-menu>
            </a-col>
            <a-col :span="4">
                <a-dropdown>
                    <div class="profile">
                        <a-avatar size="small" class="avatar" src="https://preview.pro.loacg.com/avatar2.jpg" />
                        <span>然后变成一只猫</span>
                    </div>
                    <a-menu slot="overlay" @click="onClick">
                        <a-menu-item key="center">
                            <a-icon type="user" />
<!--
                            <router-link :to="{name:'center'}"></router-link>
-->
                            <span>个人中心</span>
                        </a-menu-item>

                        <a-menu-item key="setting">
                            <a-icon type="setting" />
                            <span>网站设置</span>
                        </a-menu-item>
                        <a-menu-divider />
                        <a-menu-item key="logout">
                                <a-icon type="logout" />
                                <span>退出登录</span>
                        </a-menu-item>
                    </a-menu>
                </a-dropdown>
            </a-col>
        </a-row>
    </a-layout-header>
</template>

<script>
    import ACol from "ant-design-vue/es/grid/Col";
    export default {
        name: "ShallowHeader",
        components: {ACol},
        methods: {
            onClick({ key }) {

                console.log(`Click on item ${key}`);
            }
        }
    }
</script>

<style scoped>
.profile{
    color: hsla(0,0%,100%,.85);
}
    .menu{
        height: 64px;
        line-height: 64px;
    }
    .avatar{
        margin: 20px 8px 20px 0;
    }
</style>
