const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/question/gender",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
