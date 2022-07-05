<template>
    <div>
        <el-dialog title="配置" :visible.sync="dialogVisible" width="1000px" :before-close="handleClose">
            <div style="background:#1e1e1e;padding:20px">
                <MonacoEditor :code="code" :key="randomkey" height="600" language="json" :editorOptions="options"
                    @mounted="onMounted" @codeChange="onCodeChange">
                </MonacoEditor>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="handleClose">取 消</el-button>
                <el-button :loading="loading" type="primary" @click="configImgAdd">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import MonacoEditor from 'vue-monaco-editor'
import { configImgAdd,configImgEdit } from "@/api/imgMange";
import { format } from 'sql-formatter'
export default{
    components: {
        MonacoEditor
    },
    data(){
        return {
            editor: "",
            code:`
                {
                    "configName": "", 
                    "url": "",
                    "fileParamName": "file",
                    "addParam": [], 
                    "headers": {},
                    "paramType": "formData",
                    "baseUrl": "",
                    "result": "",
                    "remarks": ""
                }
            `,
        
            options: {
                selectOnLineNumbers: false,
            },
            randomkey: 1231231 ,
            dialogVisible:false,
            id:'',
            loading: false,
        }
    },
    mounted(){
    },
    methods:{
        handleClose(){
            this.code= `
                {
                    "configName": "", 
                    "url": "",
                    "fileParamName": "file",
                    "addParam": [], 
                    "headers": {},
                    "paramType": "formData",
                    "baseUrl": "",
                    "result": "",
                    "remarks": ""
                }
            `
            this.loading = false
            this.dialogVisible = false
        },
        async configImgAdd(){
          
            this.loading = true

            let data = JSON.parse(format(this.editor.getValue()))
            console.log(typeof data , 'datadata')

            // return
            let res = {}
            if (this.id){
                 res = await configImgAdd(data)

            }else{
                data.id = this.id
                res = await configImgEdit(data)

            }
            this.loading = false
            if(res.code == 200){
                this.$message.success(res.message)
                this.handleClose()

                this.$emit('shuaxin')
            }else{
                this.$message.warning(res.message)

            }

        },
        onMounted(editor) {
            this.editor = editor;
        },
        onCodeChange(editor) {
            console.log(this.editor.getValue());
        },
        add(){
            this.dialogVisible = true
        },
        edits(e){
            console.log(e,'dialogVisible')
            this.dialogVisible = true
            this.code = JSON.stringify(e);
            this.id = e.id

        }
     }
}

</script>
<style lang="scss">
    
</style>