// helper
const Helper = {
    // isString
    isString: (value) => typeof(value) === 'string',
    
    // relativeUri
    relativeUri: () => window.location.pathname + window.location.search
};

export { Helper };