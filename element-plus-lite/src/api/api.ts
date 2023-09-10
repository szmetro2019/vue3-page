// import qs from "qs";
import myAxios from '@/utils/request'

export function getQuery(query: Object) {
  return myAxios({
    url: '/list',
    method: 'get',
    params: query
  }, {
    repeat_request_cancel: true,
    loading: false
  }, {
    text: '获取列表数据....get'
  })
}

export function postQuery(data: Object) {
  return myAxios({
    url: '/form',
    method: 'post',
    data
  }, {
    repeat_request_cancel: true,
    loading: false
  }, {
    text: '获取列表数据....post'
  })
}
// 使用qs content-type
// export function qsQuery(query: Object) {
//   return myAxios(
//     {
//       url: "/api/login",
//       method: "post",
//       data: query,
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//       transformRequest: [
//         (data: any) => {
//           return qs.stringify(data);
//         },
//       ],
//     },
//     {
//       repeat_request_cancel: true,
//       loading: false,
//     },
//     {
//       text: "获取列表数据....",
//     }
//   );
// }