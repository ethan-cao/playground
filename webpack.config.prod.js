const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./src/app.ts",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
        extensions: ["js", "ts"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node-module/
            }
        ]        
    },
    devTool: "none",
    plugins: [
        new CleanPlugin.CleanWebpackPlugin()        
    ]
};