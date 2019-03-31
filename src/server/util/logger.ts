import { createLogger } from 'bunyan';
import axios from 'axios';

// @ts-ignore
global.logger = createLogger({
    name: "myapp",
    streams: [
        {
            stream: process.stdout,
            reemitErrorEvents: true
        }
    ]
});
axios.interceptors.request.use(request => {
    // @ts-ignore
    global.logger.info('Starting Request')
    return request
});
axios.interceptors.response.use(response => {
    // @ts-ignore
    global.logger.info('Response')
    return response
});
