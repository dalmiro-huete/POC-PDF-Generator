import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dtos/update-user.dto';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    createUser(body: CreateUserDto): Promise<import("./user.entity").User>;
    findUser(id: string): Promise<import("./user.entity").User>;
    findAllUsers(email: string): Promise<import("./user.entity").User[]>;
    updateUser(id: string, user: UpdateUserDto): Promise<{
        email: string;
        password: string;
        id: number;
    } & import("./user.entity").User>;
    deleteUser(id: string): Promise<any>;
}
