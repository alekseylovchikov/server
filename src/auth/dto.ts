import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, MinLength } from 'class-validator';

export class AuthBodyDto {
  @ApiProperty({
    example: 'test@example.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: '123456789',
  })
  @MinLength(8)
  password: string;
}

export class GetSessionInfoDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  iat: number;

  @ApiProperty()
  exp: number;
}
