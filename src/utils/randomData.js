export function getRandomCountNumber(count = 1) {
    let randomNumStr = ''
    for(let i = 0; i < count; i++) {
        randomNumStr += parseInt(Math.random() * 10)
    }
    return Number(randomNumStr)
}