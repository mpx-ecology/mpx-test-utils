import simulate from '@mpxjs/miniprogram-simulate'
import path from 'path'
import JSON5 from 'JSON5'
import fs from 'fs'
import mpx from '@mpxjs/core'

/**
 * 校验传入的data对象是否与comp实例data是否吻合
 * @param {comp实例原始data} originData
 * @param {待校验data对象} expectedDat
 */
export function checkExpectedData (originData, expectedData) {
    Object.keys(expectedData).forEach((expectedDataKey) => {
        expect(originData.hasOwnProperty(expectedDataKey)).toBeTruthy()
        if (typeof originData[expectedDataKey] === 'object') {
            expect(originData[expectedDataKey]).toEqual(expectedData[expectedDataKey])
        } else {
            expect(originData[expectedDataKey]).toBe(expectedData[expectedDataKey])
        }
    })
}

/**
 * 校验组件 HTML 是否为预期的 HTML
 * @param {comp} 组件实例
 * @param {expectedArr} 预期存在于HTML中的标签/class/内容
 */
export function checkExpectedHTML (comp, expectedArr) {
    const compHTML = comp.dom.innerHTML
    expectedArr.forEach(item => {
        if (typeof item === 'string') {
            if (item.startsWith('.')) {
                expect(comp.querySelectorAll(item)).toBeDefined()
            } else {
                expect(compHTML.includes(item)).toBeTruthy()
            }
        }
    })
}
/**
 * 创建渲染并挂载自定义组件
 * @param {组件基于所在项目的相对路径,例如'src/subpackage/gulfstream/components/bottom/bottom.mpx'} compPath
 * @returns 用于测试的自定义组件
 */
export function createCompAndAttach (compPath, renderProps = {}) {
    const id = simulate.loadMpx(compPath)
    let comp = simulate.render(id, renderProps)
    const parent = document.createElement('div')
    comp.attach(parent)
    return comp
}

/**
 * 创建渲染自定义组件
 * @param {组件基于所在项目的相对路径,例如'src/subpackage/gulfstream/components/bottom/bottom.mpx'} compPath
 * @returns 用于测试的自定义组件
 */
export function createComp (compPath, renderProps = {}) {
    const id = simulate.loadMpx(compPath)
    let comp = simulate.render(id, renderProps)
    return comp
}

/**
 * 未来废弃,通过mock路径加载mock数据
 * @param {mock数据文件基于所在项目的相对路径,例如mockData/pGetFeedbackData-service-iapetos.json} mockFilePath
 * @returns mock文件中的数据对象
 */
export function getMockContent (mockFilePath) {
    // TODO 增加失败提示和路径提示
    const readMockFile = fs.readFileSync(path.resolve(mockFilePath))
    const parsedMockObj = JSON5.parse(readMockFile.toString())
    return parsedMockObj
}

/**
 * mock 大量组件名
 * @param {传入需要mock的组件名和definition，如果没有定义definition，则默认根据组件名生成}
 * @returns void
 */
export function mockComponents (components) {
    components.forEach((item) => {
        if (typeof item === 'string') {
            simulate.mockComponent(item, {
                template: '<view>component' + item + '</view>'
            })
        }
        if (item.name && item.definition) {
            simulate.mockComponent(item.name, item.definition)
        }
    })
}

/**
 * 未来废弃,借助xfetch构造mock请求
 * @param {待模拟url} mockUrl
 * @param {mock数据文件路径} mockFilePath
 */
const proxyMap = {}
export function proxyFetch (mockUrl, mockUrlData, replace = false) {
    let mockData
    if (typeof mockUrlData === 'string') {
        mockData = getMockContent(mockUrlData)
    } else {
        mockData = mockUrlData
    }
    proxyMap[mockUrl] = mockData
    mpx.xfetch.fetch = jest.fn((options) => {
        let resData
        return new Promise((resolve) => {
            Object.keys(proxyMap).forEach((item) => {
                if (options.url.match(String(item))) {
                    resData = proxyMap[item]
                }
            })
            if (replace) {
                resolve(resData)
            } else {
                resolve({
                    errno: 0,
                    data: resData
                })
            }
        })
    })
}

export function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}

/**
 * 是否包含某个属性
 * @param comp
 * @param attr
 * @returns {boolean}
 */
export function hasAttr(comp, attr) {
    const vt = comp._vt
    if (!vt) return false
    vt.attrs.forEach(item => {
        if (item.name === attr) {
            return item
        }
    })
    for (const key in vt.event) {
        if (vt.event[key].name === attr) {
            return vt.event[key]
        }
    }
    return false
}

/**
 * 获取属性(tagName、attrs、event等)
 * @param comp
 * @returns {{tagName: string, event: Event | string, attrs: *}}
 */
export function getAttrs(comp) {
    const vt = comp._vt
    if (!vt) return
    return {
        tagName: vt.tagName,
        attrs: vt.attrs,
        event: vt.event
    }
}
