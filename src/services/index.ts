import api from '@/api';

const generateAccessToken = async (query: any): Promise <any>  => {
  return api({
    url: "/app",
    method: "post",
    data: query,
    cache: true
  });
}

const setConfiguration = async (query: any): Promise <any> => {
  return api({
    url: "/configuration",
    method: "post",
    data: query
  })
}

const getConfiguration = async (query: any): Promise <any> => {
  return api({
    url: "/configuration",
    method: "get",
    params: query
  })
}
const getApiKey = async (query: any): Promise <any> => {
  return api({
    url: "/app",
    method: "get",
    params: query
  })
}

export {
  generateAccessToken,
  getApiKey,
  setConfiguration,
  getConfiguration
}