import fetcherBuilder from '../fetcherBuilder';

const HOST = process.env.BACKEND_HOST;

export default fetcherBuilder({ host: HOST });
