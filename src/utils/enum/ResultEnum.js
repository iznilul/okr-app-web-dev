import Enum from '@/utils/enum/enum'

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
  static FAIL = [0, '操作失败']
  static SUCCESS = [1, '操作成功']
  static REQUEST_TOO_FAST = [2, '请求失败，操作频率过快']
}

const resultEnum = new ResultEnum()

export default resultEnum
