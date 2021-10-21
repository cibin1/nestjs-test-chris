import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiStatusModule } from './api-status/api-status.module';
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forRoot(),
            ApiStatusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
