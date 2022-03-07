import { forwardRef, Module } from "@nestjs/common";
import { AuthService } from './auth.service';
import { UsersModule } from "../users/users.module";
import { AuthController } from './auth.controller';
import { JwtModule } from "@nestjs/jwt";
import { JwtAuthGuard } from "./jwt-auth.guard";

@Module({
  providers: [AuthService],
  imports: [
    forwardRef(() => UsersModule),
    JwtModule.register({
    secret: 'secret',
    signOptions: {expiresIn: '24h'}
  })],
  controllers: [AuthController],
  exports: [
    AuthService,
    JwtModule
  ]
})
export class AuthModule {}
