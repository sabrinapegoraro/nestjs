import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';
import { ApiBody } from '@nestjs/swagger';
import { UserDto } from './dtos/user.dtos';
import { UserEntity } from './database/user.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    async index(): Promise<UserEntity[]> {
        return await this.usersService.findAll();
    }

    @Post()
    @ApiBody({ type: UserDto })
    async create(@Body() user: UserDto): Promise<UserEntity> {
        return await this.usersService.create(user);
    }

    @Put(':id')
    @ApiBody({ type: UserDto })
    async update(@Param('id') id: number, @Body() user: UserDto): Promise<UserEntity> {
        return await this.usersService.update(id, user);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return await this.usersService.delete(id);
    }
}
