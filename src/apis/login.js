import { getRandomCountNumber } from '@/utils/randomData.js'

function getPhoneCodeApi() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                res: 200,
                message: 'success',
                result: getRandomCountNumber(6)
            })
        }, 1500)
    })
}

export {
    getPhoneCodeApi
}