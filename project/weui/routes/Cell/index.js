module.exports = {
    path: 'cell',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/Cell'))
        })
    }
}
