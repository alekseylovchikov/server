import { Injectable } from '@nestjs/common';
import { PathAccountDto } from './dto';

@Injectable()
export class AccountService {
  getAccount(userId: number) {}

  patchAccount(userId: number, patch: PathAccountDto) {}
}
