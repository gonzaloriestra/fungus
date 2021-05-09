import fetcher from '../fetcher';

const HOST = process.env.BACKEND_HOST;

export default fetcher({ host: HOST });
