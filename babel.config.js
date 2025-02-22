module.exports = function(api) {
    api.cache(true);

    return {
        presets: [["babel-preset-expo", {
            jsxImportSource: "nativewind"
        }], "nativewind/babel"],

        plugins: [["module-resolver", {
            root: ["./"],

            alias: {
                "@/assets": "./assets",
                "@/components": "./src/components",
                "@/constants": "./src/constants",
                "@/hooks": "./src/hooks",
                "tailwind.config": "./tailwind.config.js"
            }
        }]]
    };
};
