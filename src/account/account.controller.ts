import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { AccountDto, PathAccountDto } from './dto';
import { AccountService } from './account.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { SessionInfo } from 'src/auth/session-info.decorator';
import { GetSessionInfoDto } from 'src/auth/dto';

@Controller('account')
@UseGuards(AuthGuard)
export class AccountController {
  constructor(private accountService: AccountService) {}

  @Get()
  @ApiOkResponse({
    type: AccountDto,
  })
  getAccount(
    @SessionInfo() sessionInfo: GetSessionInfoDto,
  ): Promise<AccountDto> {
    return this.accountService.getAccount(sessionInfo.id);
  }

  @Patch()
  @ApiOkResponse({
    type: AccountDto,
  })
  patchAccount(
    @Body() body: PathAccountDto,
    @SessionInfo() sessionInfo: GetSessionInfoDto,
  ): Promise<AccountDto> {
    return this.accountService.patchAccount(sessionInfo.id, body);
  }
}
