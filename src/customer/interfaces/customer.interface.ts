// ./src/customer/interfaces/customer.interface.ts 

import { Document } from 'mongoose';

export interface Customer extends Document {
    readonly DNI: String,
    readonly nombre: String,
    readonly apellidos: String,
    readonly mail: String,
    readonly telefono: String,
    readonly creado_el: Date
}