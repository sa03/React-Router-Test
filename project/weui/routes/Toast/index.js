module.exports = {
    path: 'toast',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/Toast'))
        })
    }
}
