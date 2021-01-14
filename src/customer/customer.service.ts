// ./src/customer/customer.service.ts 

import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';

import { InjectModel } from '@nestjs/mongoose'

import { Customer } from './interfaces/customer.interface';

import { CreateCustomerDTO } from './dto/create-customer.dto';


@Injectable()
export class CustomerService {

    constructor(@InjectModel('Customer') private readonly customerModel: Model<Customer>) { }

    // Muestra todos los afiliados
    async getAllCustomer(): Promise<Customer[]> {
    const customers = await this.customerModel.find().exec();
    return customers;
    }

    // Muestra un afiliado en particular
    async getCustomer(CustomerID): Promise<Customer> {
    const customer = await this.customerModel.findById(CustomerID).exec();
    return customer;
    } 

    //Agrega un afiliado nuevo
    async addCustomer(createCustomerDTO: CreateCustomerDTO): Promise<Customer> { 
    const newCustomer = new this.customerModel(createCustomerDTO); 
    return newCustomer.save(); //COLOQUÉ NEW PARA QUE DEJARA DE DAR ERROR
    } 

    //Modifica un afiliado

    async updateCustomer(CustomerID, _createCustomerDTO:CreateCustomerDTO): Promise<Customer> {
    const updatedCustomer = await this.customerModel
        .findByIdAndUpdate(CustomerID, CreateCustomerDTO, { new: true });
    return updatedCustomer;
    }


    //Elimina un afiliado
    async deleteCustomer(CustomerID): Promise<any> {
    const deletedCustomer = await this.customerModel
        .findByIdAndRemove(CustomerID);
    return deletedCustomer
    }

}

