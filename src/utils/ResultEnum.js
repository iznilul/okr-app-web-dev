import Enum from '@/utils/Enum'

class ResultEnum extends Enum {
  /**
   * 状态编码
   */
  static code

  /**
   * 状态描述
   */
  static desc
  /**
   * 枚举对象
   */
  static SUCCESS = [1, '操作很成功']
  static FAIL = [0, '操作很失败']
}

const resultEnum = new ResultEnum()

export default resultEnum
