<template>
    <a-layout class="shallow-layout">
        <side-menu :collapsed="false"
                   :collapsible="true"></side-menu>
        <a-layout :style="{ paddingLeft: contentPaddingLeft, minHeight: '100vh' }">
            <GlobalHeader :collapsed="collapsed"
                          @toggle="toggle"
            />
            <a-layout-content>
                <slot></slot>
            </a-layout-content>
        </a-layout>

    </a-layout>
</template>

<script>
    import SideMenu from "./Menu/SideMenu";
    import GlobalHeader from "./GlobalHeader";
    import {triggerWindowResizeEvent} from "../../utils/util";

    export default {
        name: "GlobalLayout",
        data() {
            return {
                collapsed: false
            }
        },
        components: {
            GlobalHeader,
            'side-menu': SideMenu,
        },
        methods: {
            toggle () {
                this.collapsed = !this.collapsed
              //  this.setSidebar(!this.collapsed)
                triggerWindowResizeEvent()
            },
        }
    }
</script>

<style scoped>
    .shallow-layout {
        height: 100%;
    }
</style>
