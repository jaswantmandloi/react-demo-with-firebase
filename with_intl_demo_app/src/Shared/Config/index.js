import prodConfig from './ProdConfig.json'
import devConfig from './DevConfig.json'

export default (process.env.NODE_ENV === "production") ? prodConfig : devConfig;
