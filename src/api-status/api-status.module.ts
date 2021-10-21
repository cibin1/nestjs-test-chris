import { Module } from '@nestjs/common';
import { ApiStatusService } from './api-status.service';
import { ApiStatusController } from './api-status.controller';
import {ApiStatusEntity} from "./api-status.entity";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports:[TypeOrmModule.forFeature([ApiStatusEntity])],
  providers: [ApiStatusService],
  controllers: [ApiStatusController]
})
export class ApiStatusModule {}
