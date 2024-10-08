import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './database/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserEntity) 
    private userRepository: Repository<UserEntity>
    ) {}

    async findAll(): Promise<UserEntity[]>{
        return await this.userRepository.find();
    }

    async create(user: User): Promise<UserEntity>{
        return await this.userRepository.save(user);
    }
}
