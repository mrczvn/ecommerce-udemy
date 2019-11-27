'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class OrderItem extends Model {

    static boot() {
        super.boot()

        thia.addHook('beforeSave', 'OrderItemHook.updateSubtotal')
    }

    static get traits() {
        return ['App/Models/Traits/NoTimestamp']
    }
    /**
     * Relacionamento entre OrderItem e Produto
     */
    product() {
        return this.belongsTo('App/Models/Products')
    }

    /**
     * Relacionamento entre OrderItem e Order
     */
    order() {
        return this.belongsTo('App/Models/Order')
    }

}

module.exports = OrderItem
