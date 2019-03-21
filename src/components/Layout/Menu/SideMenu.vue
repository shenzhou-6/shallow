<template>
    <a-layout-sider
            :trigger="null"
            :collapsible="collapsible"
            v-model="collapsed"
            class="shallow-sider"
    >
        <div class="logo"/>

        <a-menu mode="inline"
                theme="dark"
                @select="onSelect"
                :collapsed="collapsed"
                :inlineCollapsed="collapsed"
        >
            <template v-for="menu in menuList">
                <a-menu-item v-if="!menu.children" :key="menu.key">
                    <a-icon :type="menu.icon"></a-icon>
                    <span>{{menu.title}}</span>
                    <router-link :to="{name:menu.key}"></router-link>
                </a-menu-item>
                <sub-menu v-else :menu-info="menu" :key="menu.key"/>
            </template>
        </a-menu>

    </a-layout-sider>
</template>

<script>
    import SubMenu from './SubMenu'

    export default {
        name: "SideMenu",
        components: {
            'sub-menu': SubMenu,
        },
        props: {
            collapsible: {
                type: Boolean,
                required: false,
                default: false
            },
            collapsed: {
                type: Boolean,
                required: false,
                default: false
            },
        },
        data() {
            return {
                menuList: [
                    {
                        key: '11',
                        title: '11',
                        icon: '111',
                        //children: []
                    }
                ]
            }
        },
        methods: {
            onSelect (obj) {
                this.$emit('menuSelect', obj)
            }
        }
    }
</script>

<style scoped>
.shallow-sider{
    height: 100%;
}
</style>
