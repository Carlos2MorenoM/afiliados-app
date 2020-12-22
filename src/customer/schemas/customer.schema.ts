    // .src/customer/schemas/customer.schema.ts

import * as mongoose from 'mongoose';


export const CustomerSchema = new mongoose.Schema({
    DNI: String,
    nombre: String,
    apellidos: String,
    mail: String,
    teléfono: String,
    creado_el: { type: Date, default: Date.now}

})

