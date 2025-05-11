const path = require('path');
module.exports = {
    //  モジュールバンドルを行う起点となるファイルの指定
    //  指定できる値としては、ファイル名の文字列や、それを並べた配列やオブジェクト
    //  下記はオブジェクトとして指定した例
    entry: {
        bundle: './src/app.ts'
    },
    output: {
        //  モジュールバンドルを行った結果を出力する場所やファイル名の指定
        //  "__dirname" はこのファイルが存在するディレクトリを表す node.js で定義済みの関数
        path: path.join(__dirname, 'dst'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devServer: {
        static: {
            //  webpack-dev-server の公開フォルダの指定
            directory: path.join(__dirname, 'dst')
        }
    },
    //  モジュールに適用するルールの設定（ここではローダーの設定を行うことが多い）
    module: {
        rules: [
            {
                //  拡張子が .ts で終わるファイルに対して、 TypeScript コンパイラを適用する
                test:/\.ts$/, loader: 'ts-loader'
            }
        ]
    }
}