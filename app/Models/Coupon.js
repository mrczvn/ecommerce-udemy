'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Coupon extends Model {
    static get dates() {
        return ['create_at', 'updated_at', 'valid_from', 'valid_until']
    }
    /**
     * Relacionamento entre Cupom e Usuário
     */
    users() {
        return this.belongsToMany('App/Models/User')
    }

    /**
     * Relacionamento entre Cupom e Produtos
     */
    products() {
        return this.belongsToMany('App/Models/Product')
    }
    /**
     * Relacionamento entre Cupom e Orders
     */
    orders() {
        return this.belongsToMany('App/Models/Order')
    }
}

module.exports = Coupon
