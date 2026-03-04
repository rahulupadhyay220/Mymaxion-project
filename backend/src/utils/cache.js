import NodeCache from 'node-cache';

// cache with default 10 minutes
const cache = new NodeCache({ stdTTL: 600, checkperiod: 120 });

export default cache;
