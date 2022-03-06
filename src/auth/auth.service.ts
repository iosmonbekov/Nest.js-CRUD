import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { userDto } from "../users/dto/user.dto";
import { JwtService } from "@nestjs/jwt";
import { UsersEntity } from "../users/users.entity";

@Injectable()
export class AuthService {
  constructor(private userService: UsersService, private JwtService: JwtService) {}

  async login(userDto: userDto) {
    const user = await this.validateUser(userDto);
    return this.generateToken(user);
  }

  async registration(userDto: userDto) {
    const candidate =  await this.userService.getUserByEmail(userDto.email);

    if (candidate) throw new HttpException('Email already exist', HttpStatus.BAD_REQUEST);

    const user = await this.userService.createUser(userDto);

    return this.generateToken(user);
  }

  generateToken(user: UsersEntity) {
    const payload = {email: user.email, id: user.id}
    return {
      token: this.JwtService.sign(payload)
    }
  }

  async validateUser(userDto: userDto): Promise<UsersEntity> {
    const user = await this.userService.getUserByEmail(userDto.email);

    const passwordsEqual = user?.password === userDto.password;

    if (user && passwordsEqual) return user;

    throw new UnauthorizedException({ message: "Incorrect email or password"})
  }
}
