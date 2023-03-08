import request from '@/utils/request'

const api = {
  list: 'staff/list'
}

export function getStaffList (parameter) {
  return request({
    url: api.list,
    method: 'get',
    params: parameter
  })
}
