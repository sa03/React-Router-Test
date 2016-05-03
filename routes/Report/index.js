module.exports = {
    path: 'report',

    getComponent(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('./components/Index'))
        })
    }
}
