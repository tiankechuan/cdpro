import axios from '@/utils/request'
export function GetSms() {
    axios.request({
        method: 'get',
        url: '/user/12345',
        data: {
            firstName: 'Fred',
            lastName: 'Flintstone'
        }
    })
}
