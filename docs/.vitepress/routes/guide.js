import components from '../../../components';

const config = [
    {
        text: '介绍',
        collapsible: true,
        items: [
            { text: '什么是小青蛙组件库?', link: '/guide/what-is-xxx-ui' },
            { text: '快速上手', link: '/guide/getting-started' },
            { text: '配置', link: '/guide/configuration' },
        ],
    },
];

export default function sidebarGuide() {
    // 业务组件
    const compRouteConfig = [
        {
            text: '业务组件',
            collapsible: true,
            items: [
                ...Object.keys(components).map(comName => {
                    return { text: components[comName].zhName, link: `/guide/${components[comName].name}/${components[comName].name}` };
                }),
                // { text: 'demo', link: `/guide/demo/demo.md` }
            ],
        },
    ];

    // 业务指令:待开发
    // 业务脚本:待开发

    return config.concat(compRouteConfig);
}
