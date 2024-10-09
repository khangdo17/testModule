Espo.define('example-module:views/test/record/list', 'views/record/list',
    Dep => Dep.extend({

        setup() {
            Dep.prototype.setup.call(this);
        },

        data() {
            return Dep.prototype.data.call(this);
        },

        afterRender() {
            Dep.prototype.afterRender.call(this);
        }
    })
);
