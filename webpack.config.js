const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/app.ts",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "dist"
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
    devTool: "inline-source-map"
};