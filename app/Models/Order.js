'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {
    /**
     * Relacionamento entre Order e Itens
     */
    items() {
        return this.hasMany('App/Models/OrderItem')
    }

    /**
     * Relacionamento entre Order e Cupons
     */
    coupons() {
        return this.belongsToMany('App/Models/Coupon')
    }
    /**
     * Relacionamento entre Order e Desconto
     */
    discounts() {
        return this.hasMany('App/Models/Discount')
    }
    /**
     * Relacionamento entre Order e Usuários
     */
    user() {
        return this.belongsTo('App/Models/Users', 'user_id', 'id')
    }
    
}

module.exports = Order
