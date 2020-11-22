module.exports = {
    outputDir: 'dist',
    publicPath: process.env.NODE_ENV === 'production'
        ? '/cms-front/'
        : '/',
    runtimeCompiler: true,
}


