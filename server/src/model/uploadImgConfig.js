import { DataTypes } from "sequelize"
import { sequelize } from "./sequelize"

// 上传图片
const UploadImgConfig = sequelize.define(
  'upload_img_config',
  {
    configName: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "上传接口名称",
    },
    baseUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
      comment: "接口返回地址前缀",
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "上传地址",
      validate: {
        isUrl: true,
      }
    },
    fileParamName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "file",
      comment: "上传文件参数名称",
    },
    addParam: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
      comment: "上传文件附加参数名称",
      get() {
        return JSON.parse(this.getDataValue("addParam"))
      },
      set(value) {
        this.setDataValue('addParam', JSON.stringify(value))
      }
    },
    headers: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "上传文件 headers",
      get() {
        return JSON.parse(this.getDataValue("headers"))
      },
      set(value) {
        this.setDataValue('headers', JSON.stringify(value))
      }
    },
    paramType: {
      type: DataTypes.ENUM([ "formData", "base64" ]),
      allowNull: false,
      defaultValue: "formData",
      comment: "附件参数类型",
    },
    status: {
      type: DataTypes.ENUM([ "0", "1" ]),
      allowNull: false,
      defaultValue: "0",
      comment: "是否启用",
    },
    result: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "上传文件 返回结果",
    },
    remarks: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "备注",
    }
  },
  {
    underscored: true,
    freezeTableName: true,
  }
)

export const UploadImgConfigModel = UploadImgConfig
