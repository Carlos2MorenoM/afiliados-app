import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';

import { CustomerService } from './customer.service';

import { CreateCustomerDTO } from './dto/create-customer.dto';

@Controller('customer')
export class CustomerController {
    constructor(private customerService: CustomerService) { }

    // add a customer
    @Post('/create')

    async addCustomer(@Res() res, @Body() CreateCustomerDTO: CreateCustomerDTO) {
        const customer = await this.customerService.addCustomer(CreateCustomerDTO);
        return res.status(HttpStatus.OK).json({
            message: "El afiliado se ha creado exitosamente!"
        })
    }
}
