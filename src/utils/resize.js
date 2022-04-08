let designWidth = 1366 //设计稿的宽度，根据实际项目调整
let designHeight = 768 //设计稿的高度，根据实际项目调整

export function setScale() {
    // var fontSize =
    //     document.documentElement.clientWidth / document.documentElement.clientHeight < designWidth / designHeight
    //         ? (document.documentElement.clientWidth / designWidth) * 12
    //         : (document.documentElement.clientHeight / designHeight) * 12
    var fontSize =
        (document.documentElement.clientWidth / designWidth) * (document.documentElement.clientHeight / designHeight) * 12
    // console.log(document.documentElement.clientWidth)
    // console.log(document.documentElement.clientHeight)
    console.log(fontSize)
    document.querySelector('html').style.fontSize = fontSize + 'px'
}

export function px2rem(px) {
    let designFontSize = 12
    return (px / designFontSize) + 'rem'
}
