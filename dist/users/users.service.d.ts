import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UpdateUserDto } from "./dtos/update-user.dto";
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create(email: string, password: string): Promise<User>;
    findOne(id: number): Promise<User>;
    find(email: string): Promise<User[]>;
    update(id: number, attrs: UpdateUserDto): Promise<{
        email: string;
        password: string;
        id: number;
    } & User>;
    remove(id: number): Promise<User>;
}
