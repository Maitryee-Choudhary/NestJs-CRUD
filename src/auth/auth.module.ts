import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './auth.constant';
import { JwtStrategy } from './auth.jwt.strategy';

@Module({
  
  controllers: [AuthController],
  imports: [UserModule, PassportModule,
    JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '3d' },
    }),
   ],
  providers: [AuthService, LocalStrategy, JwtStrategy],

})
export class AuthModule {}