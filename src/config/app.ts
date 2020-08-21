type Config = {
  env: string;
  isProd: boolean,
  production: {
    api_endpoint: string
  },
  staging: {
    api_endpoint: string
  },
  development: {
    api_endpoint: string
  }
}

const config: Config = {
  env: "production",
  isProd: process.env.NODE_ENV === "production" || false,
  production: {
    api_endpoint: '/api/v1'
  },
  staging: {
    api_endpoint: 'https://b9xapq4qs7.execute-api.ap-south-1.amazonaws.com'
  },
  development: {
    api_endpoint: ''
  }
}

export default config;
