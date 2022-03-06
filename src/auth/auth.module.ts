import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from "../users/users.module";
import { AuthController } from './auth.controller';
import { JwtModule } from "@nestjs/jwt";

@Module({
  providers: [AuthService],
  imports: [UsersModule, JwtModule.register({
    secret: 'secret',
    signOptions: {expiresIn: '24h'}
  })],
  controllers: [AuthController]
})
export class AuthModule {}
