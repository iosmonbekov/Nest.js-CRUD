import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersEntity } from "./users.entity";
import { userDto } from "./dto/user.dto";

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {
  }

  @Get()
  getAllUsers(): Promise<UsersEntity[]> {
    return this.usersService.getAllUsers();
  }

  @Get('/:id')
  getUserById(@Param('id') id: string): Promise<UsersEntity>{
    return this.usersService.getUserById(Number(id));
  }

  @Post()
  createUser(@Body() userDto: userDto): Promise<UsersEntity> {
    return this.usersService.createUser(userDto);
  }
}
