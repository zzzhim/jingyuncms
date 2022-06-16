import { ArticleModel } from "../model/article"
import { default as logger } from "../../utils/loggerger"
import { success, error as _error, info } from "../../utils/responsense"

/**
 * 
 * @description 添加文章
 */
export async function add({ title, tags, content }) {
  try {
    const article = await ArticleModel.create({
      title,
      tags,
      content,
    })

    return success(200)
  } catch (error) {
    logger.error(error)

    return _error(500)
  }
}

/**
 * 
 * @description 更新文章
 */
export async function update({ id, title, tags, content }) {
  try {
    const article = await ArticleModel.update(
      {
        title,
        tags,
        content,
        updateTime: new Date(),
      },
      {
        where: {
          id,
          isDelete: '0',
        }
      }
    )

    return success(200)
  } catch (error) {
    logger.error(error)

    return _error(500)
  }
}

/**
 * 
 * @description 查询文章
 * @param {number} pageSize 10
 * @param {number} pageNo 1
 */
export async function list({ pageSize = 10, pageNo = 1 }) {
  try {
    const { count = 0, rows = [] } = await ArticleModel.findAndCountAll({
      attributes: [
        'id',
        'title',
        'tags',
        'content',
        'createTime',
        'updateTime',
      ],
      where: {
        isDelete: '0',
      },
      limit: parseInt(pageSize),
      offset: parseInt(pageSize * (pageNo - 1)),
    })

    return success(
      200,
      {
        count: count,
        list: rows,
      }
    )
  } catch (error) {
    logger.error(error)

    return _error(500)
  }
}

/**
 * 
 * @description 删除文章
 */
export async function del({ id }) {
  try {
    const data = await ArticleModel.update(
      {
        isDelete: '1',
      },
      {
        where: {
          id,
        }
      }
    )

    return success(200)
  } catch (error) {
    logger.error(error)

    return _error(500)
  }
}

/**
 * 
 * @description 文章详情
 */
export async function details({ id }) {
  try {
    const data = await ArticleModel.findOne({
      attributes: [
        'id',
        'title',
        'tags',
        'content',
      ],
      where: {
        isDelete: '0',
        id,
      }
    })

    if (data) {
      return success(
        200,
        {
          article: data,
        },
      )
    }

    return info(
      200,
      {
        article: {},
      },
      '该条数据不存在'
    )
  } catch (error) {
    logger.error(error)

    return _error(500)
  }
}