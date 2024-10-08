import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './database/user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './dtos/user.dtos';

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

    async update(id: number, user: User): Promise<UserEntity> {
        await this.userRepository.update(id, user);
        return await this.userRepository.findOneBy({ id });
    }

    async delete(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }
}
