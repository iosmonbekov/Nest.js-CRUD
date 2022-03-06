import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { userDto } from "../users/dto/user.dto";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) {
  }

  @Post('/login')
  login(@Body() userDto: userDto) {
    return this.authService.login(userDto);
  }

  @Post('/registration')
  registration(@Body() userDto: userDto) {
    return this.authService.registration(userDto);
  }
}
