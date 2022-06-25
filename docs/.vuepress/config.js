const sidebar = {
    '/': [
        {
            title: '快速开始',
            collapsable: false,
            children: [
                'installation/introduction-to-basic-tools',
                'installation/installation-and-configuration'
            ]
        },
        {
            title: '教程',
            collapsable: false,
            children: [
                'guides/getting-started',
                'guides/component-analyze',
                // 'guides/dom-events',
                'guides/testing-async-components',
                // 'guides/using-with-typescript',
                // 'guides/using-with-vuex',
                'guides/useful-libraries-for-testing'
            ]
        },
        {
            title: 'API',
            collapsable: false,
            children: [
                'api/createCompAndAttach',
                'api/createComp',
                'api/mockComponents',
                'api/proxyFetch'
            ]
        },
        '/api/rootComponent/'
    ]
}


module.exports = {
    base: '/mpx-ecology/',
    title: 'Mpx框架单元测试',
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}],
        ['link', {rel: 'stylesheet', href: '/vueschool.css'}]
    ],
    cache: false,
    theme: '@vuepress/vue',
    themeConfig: {
        repo: 'mpx-ecology/mpx-test-utils',
        docsDir: 'docs',
        editLinks: true,
        docsBranch: 'dev',
        sidebar
        // sidebar: [
        //   '/',
        //   '/installation/',
        //   '/guides/',
        //   '/api/',
        //   '/api/wrapper/',
        //   '/api/wrapper-array/',
        //   '/api/options',
        //   '/api/components/'
        // ]
    },
    extendMarkdown: md => {
        // use more markdown-it plugins!
        md.use(require('markdown-it-include'))
    }
}
