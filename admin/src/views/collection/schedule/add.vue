<template>
    <div>
        <el-dialog title="提示" :visible.sync="dialogVisible" width="800px" :before-close="handleClose">
            <div>
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="活动名称">
                        <el-input v-model="form.jobName"></el-input>
                    </el-form-item>
                    <el-form-item label="采集类型">
                        <el-select v-model="form.jobType" placeholder="请选择">
                            <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id">
                            </el-option>
                        </el-select>

                    </el-form-item>
                    <el-form-item label="接口id">
                        <el-input v-model="form.jobParams"></el-input>
                    </el-form-item>
                    <el-form-item label="时间小时">
                        <el-input v-model="form.jobAdditionalParams"></el-input>
                    </el-form-item>
                    <el-form-item label="任务详情">
                        <el-input v-model="form.description"></el-input>
                    </el-form-item>
                    <el-form-item label="备注">
                        <el-input v-model="form.remarks"></el-input>
                    </el-form-item>
                    <el-form-item label="周几">
                        <el-select v-model="form.dayOfWeek" multiple placeholder="请选择">
                            <el-option v-for="item in options1" :key="item.id" :label="item.name" :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="小时">
                        <el-select v-model="form.hour" multiple placeholder="请选择">
                            <el-option v-for="item in options2" :key="item" :label="item" :value="item">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="分钟">
                        <el-input v-model="form.minute"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="handleClose">取 消</el-button>
                <el-button type="primary" @click="upData">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import { scheduleList, scheduleDel, scheduleEdit, scheduleAdd } from "@/api/schedule";
export default {
    data() {
        return {
            dialogVisible: false,

            options:[
                {name:'视频',id:'0'}
            ],
            options1: [
                { name: '周日', id: 0 },
                { name: '星期一', id: 1 },
                { name: '星期二', id: 2 },
                { name: '星期三', id: 3 },
                { name: '星期四', id: 4 },
                { name: '星期五', id: 5 },
                { name: '星期六', id: 6 },
            ],
            options2: [
               0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23
            ],
            form:{
                jobName:'',
                jobType: '0',
                jobParams: '',
                jobAdditionalParams: '24',
                description: '',
                remarks: '',
                minute: 0,
                dayOfWeek: [],
                hour: [],

            }
        }
    },
    methods: {
        handleClose(){
            this.form = {
                jobName: '',
                jobType: 0,
                jobParams: '',
                jobAdditionalParams: 24,
                description: '',
                remarks: '',
                minute: '',
                dayOfWeek: [],
                hour: [],
            }
            this.dialogVisible = false
        },
        add(){
            this.dialogVisible = true
        },
        edit(e){
            this.form = {
                jobName: e.jobName,
                jobType: e.jobType,
                jobParams: e.jobParams,
                jobAdditionalParams: e.jobAdditionalParams,
                description: e.description,
                remarks: e.remarks,
                minute: JSON.parse(e.cron).minute,
                dayOfWeek: JSON.parse(e.cron).dayOfWeek,
                hour: JSON.parse(e.cron).hour,
            }
            this.dialogVisible = true
        },
        async  upData(){
            let res = await scheduleAdd(this.form)
            if (res.code === 200) {
                this.$message.success("添加成功")
                this.handleClose()
                this.$emit("shuaxin")
            }else {
                console.log('error submit!!')
            }
        }

    },
}
</script>
<style lang="scss">
    
</style>