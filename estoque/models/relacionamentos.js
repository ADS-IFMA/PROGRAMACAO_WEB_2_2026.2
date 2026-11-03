import Produto from "./Produto.js";
import Venda from "./Venda.js"

Produto.hasMany(Venda, {foreignKey: 'produto_id', as: 'vendas'})
Venda.belongsTo(Produto, {foreignKey: 'produto_id', as: 'produto'})

export default {Produto, Venda}