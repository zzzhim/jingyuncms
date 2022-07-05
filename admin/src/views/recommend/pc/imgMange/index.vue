<template>
    <div class="imgMange">
        <div style="height:50px">
            <el-button style="float:right" @click="add">添加</el-button>
        </div>
        <el-table :data="tableData" style="width: 100%" height="calc(100vh - 200px)">

            <el-table-column prop="configName" label="名称" width="180">
            </el-table-column>
            <el-table-column prop="url" label="地址" width="180">
            </el-table-column>
            <el-table-column prop="fileParamName" label="类型名称" width="180">
            </el-table-column>

            <el-table-column prop="remarks" label="备注">
            </el-table-column>
            <el-table-column prop="updatedAt" label="更新时间" width="180">
            </el-table-column>
            <el-table-column label="操作" width="180">
                <template slot-scope="scope">
                    <div>
                        <el-button @click="del(scope.row)">删除</el-button>
                        <el-button @click="edit(scope.row)">编辑</el-button>
                    </div>
                </template>
            </el-table-column>
        </el-table>
        <addMange ref="addMange" @shuaxin="configImgList"></addMange>
    </div>
</template>
<script>
import { configImgList, configImgEdit, configImgDel } from "@/api/imgMange.js";
import addMange from "./add";
export default {
    components:{
        addMange
    },
    data() {
        return {
            tableData:[],
        }
    },
    methods: {
       async del(e){
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(async() => {
                let res = await configImgDel({ id: e.id })
                if(res.code == 200){
                    this.configImgList()
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }else{
                    this.$message({
                        type: 'success',
                        message: res.message
                    });
                }
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },  
        add(){
            this.$refs.addMange.add()
        },
        async configImgList(){
            let res = await configImgList()
            this.tableData = res.data
        },
        edit(e){
            this.$refs.addMange.edits(e)
        }
    },
    mounted() {
        this.configImgList()
    },

}
</script>
<style lang="scss">

    .imgMange{
        padding:20px;
    }
</style>