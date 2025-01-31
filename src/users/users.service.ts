import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {  User, UserDocument , userDTO} from 'src/schema/user.model';
//import { UserDto } from 'src/dtos/users.Dto';


@Injectable()
export class UsersService {
    constructor(
        @InjectModel('user') private userModel: Model<UserDocument>
    ) {}

    async getUsers(): Promise<User[]> {
        return this.userModel.find({}, "-password").exec()
    }

    async createUsers(user: typeof userDTO): Promise<User>{
        const newUser = new this.userModel({ ...user })
        console.log(newUser)
        return await newUser.save()
    }
}
