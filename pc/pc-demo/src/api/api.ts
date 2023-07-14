import myAxios from '@/utils/request'

export function getQuery(query: Object) {
  return myAxios(
    {
      url: '/max/list',
      method: 'get',
      params: query
    },
    {
      repeat_request_cancel: true,
      loading: false
    },
    {
      text: '获取列表数据....'
    }
  )
}

export function postQuery(data: Object) {
  return myAxios(
    {
      url: '/max/add',
      method: 'post',
      data
    },
    {
      repeat_request_cancel: true,
      loading: false
    },
    {
      text: '获取列表数据....'
    }
  )
}
