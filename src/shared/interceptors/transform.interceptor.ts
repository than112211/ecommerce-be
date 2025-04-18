// src/common/interceptors/transform.interceptor.ts
import {
  CallHandler,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToInstance } from 'class-transformer';
import { IResponseCommon } from '../types/common';

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor {
  constructor(private readonly dto: new (...args: any[]) => T) {}

  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    return handler.handle().pipe(
      map((data: IResponseCommon<unknown>) => {
        console.log(data);
        throw new HttpException(
          {
            success: true,
            message: data.message || '',
            data:
              plainToInstance(this.dto, data.data, {
                excludeExtraneousValues: true,
              }) || null,
            pagination: data.pagination,
          },
          HttpStatus.OK,
        );
      }),
    );
  }
}
