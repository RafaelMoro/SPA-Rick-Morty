const getHash = () => location.hash.slice(1).toLowerCase().split('/')[1] || '/'

export {getHash}