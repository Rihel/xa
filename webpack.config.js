const webpack=require('webpack'),
htmlWebpack=require('html-webpack-plugin');
module.exports={
	entry:{
		app:__dirname+'/src/index.ts'
	},
	output:{
		path:__dirname+'/dist',
		filename:'[name].js'
	},
	module:{
		rules:[
			{
				test:/\.ts/,
				include:/src/,
				loaders:['ts-loader']
			},
			{
				test:/\.js/,
				include:/src/,
				loaders:['babel-loader']
			}
		]
	},
	plugins:[
		new webpack.optimize.CommonsChunkPlugin({
			name:'commons',
			filename:'common.js'
		}),
		new htmlWebpack({
			title:'哈哈哈',
			template:'./index.html'
		})
	]
}