import { ApiProperty } from '@nestjs/swagger';

export class SignUpBodyDto {
  @ApiProperty({
    example: 'test@example.com',
  })
  email: string;

  @ApiProperty({
    example: '123456789',
  })
  password: string;
}

export class SignInBodyDto {
  @ApiProperty({
    example: 'test@example.com',
  })
  email: string;

  @ApiProperty({
    example: '123456789',
  })
  password: string;
}

export class GetSessionInfoDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;
}
