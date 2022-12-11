// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-svgo", "@vueuse/nuxt"],
  svgo: {
    svgoConfig: {
      multipass: true,
      plugins: [
        {
          name: "preset-default",
          params: {
            overrides: {
              // customize default plugin options
              inlineStyles: {
                onlyMatchedOnce: false,
              },
              // or disable plugins
              removeDoctype: false,
              removeViewBox: false,
            },
          },
        },
      ],
    },
  },
});
