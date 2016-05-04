module.exports = {
    path: 'table/:mobile/:vcode',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/Table'))
        })
    }
}
