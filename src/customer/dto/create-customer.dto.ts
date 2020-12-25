// ./src/customer/dto/create-customer.dto.ts 

export class CreateCustomerDTO {
    readonly DNI: String;
    readonly nombre: String;
    readonly apellidos: String;
    readonly mail: String;
    readonly telefono: String;
    readonly creado_el: Date;
}