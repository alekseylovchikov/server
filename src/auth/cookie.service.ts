import { Injectable } from '@nestjs/common';
import { Response } from 'express';

const MILLISECONDS = {
  oneDayMs: 24 * 60 * 60 * 1000,
};

@Injectable()
export class CookieService {
  static tokenKey = 'access-token';

  setToken(res: Response, token: string) {
    res.cookie(CookieService.tokenKey, token, {
      httpOnly: true,
      maxAge: MILLISECONDS.oneDayMs,
    });
  }

  removeToken(res: Response) {
    res.clearCookie(CookieService.tokenKey);
  }
}
