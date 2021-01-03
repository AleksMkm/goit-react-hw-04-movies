import slugify from 'slugify';

const makeSlug = string => slugify(string, { lower: true });

export default makeSlug;
