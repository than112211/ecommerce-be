// src/common/filters/bad-request.filter.ts
import {
  Catch,
  BadRequestException,
  ArgumentsHost,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(BadRequestException) // only 400 errors
export class BadRequestFilter implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const status = HttpStatus.BAD_REQUEST; // 400

    const res: any = exception.getResponse();
    console.log(res);

    response.status(status).json({
      success: false,
      errors: {
        message: res.message || 'An error occurred.',
        code: res.code || '',
      },
    });
  }
}
