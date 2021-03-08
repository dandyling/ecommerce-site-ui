module.exports = {
    images: {
      domains: ['dynamic.zacdn.com'],
    },
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        '/': { page: '/' },
      }
    },
  }