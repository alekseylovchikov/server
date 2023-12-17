import { Injectable } from '@nestjs/common';
import { AccountDto, PathAccountDto } from './dto';
import { DbService } from 'src/db/db.service';

@Injectable()
export class AccountService {
  constructor(private dbService: DbService) {}

  async create(userId: number): Promise<AccountDto> {
    return this.dbService.account.create({
      data: { ownerId: userId, isBlockingEnabled: false },
    });
  }

  async getAccount(userId: number): Promise<AccountDto> {
    return this.dbService.account.findFirstOrThrow({
      where: { ownerId: userId },
    });
  }

  async patchAccount(
    userId: number,
    patch: PathAccountDto,
  ): Promise<AccountDto> {
    return this.dbService.account.update({
      where: { ownerId: userId },
      data: patch,
    });
  }
}
