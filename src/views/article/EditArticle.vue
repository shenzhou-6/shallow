<template>
    <textarea></textarea>
</template>

<script>
    import 'font-awesome/css/font-awesome.min.css'
    import 'simplemde/dist/simplemde.min.css'
    import SimpleMDE from 'simplemde'
    export default {
        name: "EditArticle",
        data(){
            return{
                markdown:null,
            }
        },
        mounted() {
            this.markdown = new SimpleMDE({
                element:document.getElementById("markdown"),
                autosave:{
                    enabled:true,
                    uniqueId:'articleEdit'
                },
                toolbar:false
            })
        }
    }
</script>

<style scoped>

</style>
