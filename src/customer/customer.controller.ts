import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';

import { CustomerService } from './customer.service';

import { CreateCustomerDTO } from './dto/create-customer.dto';

@Controller('customer')
export class CustomerController {
    constructor(private customerService: CustomerService) { }

    // Agregar Afiliado
    @Post('/create')

    async addCustomer(@Res() res, @Body() CreateCustomerDTO: CreateCustomerDTO) {
        const customer = await this.customerService.addCustomer(CreateCustomerDTO);
        return res.status(HttpStatus.OK).json({
            message: "El afiliado se ha creado exitosamente!",
            customer
        })
    }

    // Mostrar lista de Afiliados

    @Get('Customers')
    async getAllCustomer(@Res() res) {
        const customers = await this.customerService.getAllCustomer();
        return res.status(HttpStatus.OK).json(customers);
    }


    // Mostrar un afiliado en particular utilizando el ID
    @Get('customer/:customerID')
    async getCustomer(@Res() res, @Param('CustomerID') customerID) {
        const customer = await.this.customerService.getCustomer(customerID);
        if (!customer) throw new NotFoundException('Afiliado no existe!')
        return res.status(HttpStatus.OK).json(customer);
    }

}
