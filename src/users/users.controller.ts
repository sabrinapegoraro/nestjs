import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';
import { ApiBody } from '@nestjs/swagger';
import { UserDto } from './dtos/user.dtos';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    index():User[] {
        return this.usersService.findAll()
    }

    @Post()
    @ApiBody({ type: UserDto })
    create(@Body() user: UserDto): User {
        return this.usersService.create(user);
    }
}
