import { HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UsersEntity } from "./users.entity";
import { Repository } from "typeorm";
import { userDto } from "./dto/user.dto";

@Injectable()
export class UsersService {
  constructor(@InjectRepository(UsersEntity) private usersRepository: Repository<UsersEntity>) {}

  getAllUsers(): Promise<UsersEntity[]> {
    return this.usersRepository.find({relations: ['todos']});
  }

  getUserById(id: number): Promise<UsersEntity> {
    return this.usersRepository.findOne(id, {relations: ['todos']});

  }

  getUserByEmail(email: string): Promise<UsersEntity | undefined> {
    return this.usersRepository.findOne({ email });
  }

  createUser(user: userDto): Promise<UsersEntity> {
    const newUser = this.usersRepository.create(user);

    return this.usersRepository.save(newUser);
  }
}
