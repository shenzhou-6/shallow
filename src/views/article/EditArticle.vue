<template>
    <textarea id="markdown" class="markdown"></textarea>
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
                //toolbar:false
            })

            this.createToolBar('图片上传','file-photo-o','')
            this.createToolBar('设置','cog','float:right')
            this.createToolBar('返回列表','arrow-circle-right','float:right')
        },
        methods:{
            createToolBar(title,className,style){
                let toolbar =  document.getElementsByClassName("editor-toolbar")[0]
                let bar =document.createElement("a")
                bar.className = 'fa fa-'+className
                bar.title = title
                bar.tabIndex= '-1'
                if (style!=null){
                    bar.style = style
                }
                toolbar.appendChild(bar)
            }
        }
    }
</script>

<style scoped>
</style>
