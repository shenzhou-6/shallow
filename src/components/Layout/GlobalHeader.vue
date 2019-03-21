<template>
    <a-layout-header style="background: #fff; padding: 0">
        <a-icon class="trigger"
                @click="toggle"
                :type="collapsed ? 'menu-fold' : 'menu-unfold'">
        </a-icon>
    </a-layout-header>
</template>

<script>
    export default {
        name: "GlobalHeader",
        /*data(){
            return {
                collapsed: false,
            }
        },*/
        props:{
            collapsed: {
                type: Boolean,
                required: false,
                default: false
            },
        },
        methods:{
            toggle () {
                this.$emit('toggle')
            }
        }
    }
</script>

<style lang="less">
    .trigger {
        font-size: 20px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color .3s;
    &:hover {
         background: rgba(0, 0, 0, 0.025);
     }
    }
</style>
