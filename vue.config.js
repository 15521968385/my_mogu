module.exports = {
	devServer : {
		open : true,
		host : 'localhost',
		port : 8850,
		hot : true,
		disableHostCheck:true
	},
	lintOnSave : false,
	configureWebpack: {
        resolve: {
            alias: { //配置别名,修改后需要重新编译才能生效
                'src':'@',
            }
        }
    }
}