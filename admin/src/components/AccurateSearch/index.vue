<template>
  <el-row :gutter="10">
    <template v-if="!isOneRow">
      <el-col :span="24" v-show="showSearch">
        <el-form
          :model="formData"
          :rules="rules"
          ref="accurateSearch"
          label-width="120px"
          @submit.native.prevent="prevent"
        >
          <template v-for="(arr, index) in list">
            <el-row :key="index">
              <template v-for="(item, i) in arr.list">
                <el-col :span="item.span" :key="i" class="form-col">
                  <el-form-item :label="item.label" :prop="item.prop">
                    <template v-if="item.inputType === 'input'">
                      <el-input
                        v-model="formData[item.prop]"
                        :placeholder="item.placeholder"
                        clearable
                        :size="item.size || 'small'"
                        :type="item.type || 'text'"
                        @keyup.enter.native="handleQuery"
                        :style="item.styles || { width: '100%' }"
                      />
                    </template>

                    <template v-if="item.inputType === 'select'">
                      <el-select
                        filterable
                        v-model="formData[item.prop]"
                        clearable
                        :placeholder="item.placeholder"
                        :style="item.styles || { width: '100%' }"
                        >
                        <el-option
                          v-for="options in item.list"
                          :key="options[item.selectValue]"
                          :label="options[item.selectLabel]"
                          :value="options[item.selectValue]"
                        />
                      </el-select>
                    </template>

                    <template v-if="item.inputType === 'datePicker'">
                      <el-date-picker
                        v-model="formData[item.prop]"
                        :type="item.type"
                        :placeholder="item.placeholder"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        :format="item.format"
                        :value-format="item.valueFormat"
                        :style="item.styles || { width: '100%' }"
                        >
                      </el-date-picker>
                    </template>
                  </el-form-item>
                </el-col>
              </template>
            </el-row>
          </template>
        </el-form>
      </el-col>
    </template>

    <el-col :span="24" class="mb8">
      <el-row type="flex" justify="end" align="middle">
        <el-col :xl="4" :lg="6" :md="6" :sm="4">
          <slot name="toolbar" />
        </el-col>

        <el-col :xl="16" :lg="12" :md="12" :sm="13">
          <el-row type="flex" justify="end" v-show="showSearch">
            <template v-if="isOneRow">
              <el-form
                :model="formData"
                :rules="rules"
                ref="accurateSearch"
                label-width="120px"
                @submit.native.prevent="prevent"
                >
                <template v-for="(item, i) in list">
                  <el-col :span="item.span" :key="i" class="form-col">
                    <el-form-item :label="item.label" :prop="item.prop" style="margin-bottom: 0px;">
                      <template v-if="item.inputType === 'input'">
                        <el-input
                          v-model="formData[item.prop]"
                          :placeholder="item.placeholder"
                          clearable
                          :size="item.size || 'small'"
                          :type="item.type || 'text'"
                          @keyup.enter.native="handleQuery"
                          :style="item.styles || { width: '100%' }"
                        />
                      </template>

                      <template v-if="item.inputType === 'select'">
                        <el-select
                          v-model="formData[item.prop]"
                          clearable
                          :placeholder="item.placeholder"
                          :style="item.styles || { width: '100%' }"
                          >
                          <el-option
                            v-for="options in item.list"
                            :key="options[item.selectValue]"
                            :label="options[item.selectLabel]"
                            :value="options[item.selectValue]"
                          />
                        </el-select>
                      </template>

                      <template v-if="item.inputType === 'datePicker'">
                        <el-date-picker
                          v-model="formData[item.prop]"
                          :type="item.type"
                          :placeholder="item.placeholder"
                          range-separator="至"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期"
                          :format="item.format"
                          :value-format="item.valueFormat"
                          :style="item.styles || { width: '100%' }"
                          >
                        </el-date-picker>
                      </template>
                    </el-form-item>
                  </el-col>
                </template>
              </el-form>
            </template>
          </el-row>
        </el-col>

        <el-col :xl="4" :lg="6" :md="6" :sm="7">
          <right-toolbar :showSearch.sync="showSearch" @queryTable="queryTable">
            <el-button
              type="cyan"
              icon="el-icon-search"
              size="mini"
              @click="handleQuery"
              v-show="showSearch"
              >搜索</el-button
            >
            <el-button
              icon="el-icon-refresh"
              size="mini"
              @click="resetQuery"
              v-show="showSearch"
              >重置</el-button
            >
          </right-toolbar>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "AccurateSearch",
  props: {
    list: Array,
    formData: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
      default: () => ({}),
    },
    isOneRow: Boolean,
  },
  data() {
    return {
      showSearch: true,
    };
  },
  methods: {
    /*
     *
     * 刷新列表操作
     */
    queryTable() {
      this.$emit("queryTable");
    },
    /*
     *
     * 搜索按钮操作
     */
    handleQuery() {
      this.$emit("handleQuery");
    },
    /*
     *
     * 重置按钮操作
     */
    resetQuery() {
      this.$refs["accurateSearch"].resetFields()
      this.$emit("queryTable")
    },
    prevent() {

    }
  },
};
</script>

<style lang="scss" scoped>
.form-col {
}
</style>
