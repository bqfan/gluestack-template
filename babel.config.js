module.exports = function(api) {
    api.cache(true);

    return {
        presets: [["babel-preset-expo", {
            jsxImportSource: "nativewind"
        }], "nativewind/babel"],

        plugins: [["module-resolver", {
            root: ["./"],

            alias: {
                "@/constants": "./src/constants",
                "@/hooks": "./src/hooks",
                "@/components/": "./src/components",
                "@/assets": "./assets",
                "tailwind.config": "./tailwind.config.js"
            }
        }]]
    };
};
