module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map', // 启用source-map
    entry: './src/index.js',
    output: {
        filename: 'random-lv.min.js', // 文件名称
        library: {
            name: 'RandomLv', // 定义暴露到浏览器环境的全局变量名称
            type: 'umd' // 暴露库的类型
        }
    },
    target: ['web', 'es5']
    // optimization: {
    //     splitChunks: {
    //         minSize: 1,
    //         chunks: 'all',
    //         name: 'commons'
    //     }
    // },
}