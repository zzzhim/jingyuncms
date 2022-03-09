<template>
  <el-row :gutter="10">
    <el-col :span="24">
      <el-form
        :model="formData"
        :rules="rules"
        ref="accurateSearch"
        label-width="140px"
        @submit.native.prevent="prevent"
      >
        <template v-for="(arr, index) in list">
          <el-row :key="index">
            <template v-for="(item, i) in arr.list">
              <el-col :span="item.span" :key="i" class="form-col">
                <el-form-item :label="item.label" :prop="item.prop">
                  <template v-if="item.inputType === 'input'">
                    <el-input
                      v-bind="{ ...item.attr }"
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
                      v-bind="{ ...item.attr }"
                      filterable
                      v-model="formData[item.prop]"
                      clearable
                      :placeholder="item.placeholder"
                      :style="item.styles || { width: '100%' }"
                      >
                      <el-option
                        v-bind="{ ...item.attr }"
                        v-for="options in item.list"
                        :key="options[item.selectValue]"
                        :label="options[item.selectLabel]"
                        :value="options[item.selectValue]"
                      />
                    </el-select>
                  </template>

                  <template v-if="item.inputType === 'datePicker'">
                    <el-date-picker
                      v-bind="{ ...item.attr }"
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
                  <template v-if="item.inputType === 'button'">
                    <el-button type="primary" @click="item.onClick">{{ item.name }}</el-button>
                  </template>

                  <template v-if="item.inputType === 'image'">
                    <template v-if="item.isOneImg">
                        <UploadImage
                          :disabled="item.disabled"
                          :imgFile.sync="formData[item.prop]"
                          :fileList.sync="item.fileList"
                          isOneImg
                        />
                    </template>

                    <template v-else>
                      <UploadImage
                        :disabled="item.disabled"
                        :fileList.sync="formData[item.prop]"
                      />
                    </template>
                  </template>
                </el-form-item>
              </el-col>
            </template>
          </el-row>
        </template>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "AccurateSearch",
  components: {
    UploadImage: () => import("@/components/UploadImage")
  },
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
  },
  data() {
    return {
    };
  },
  methods: {
    prevent() {

    }
  },
};
</script>

<style lang="scss" scoped>
.form-col {
}
</style>
