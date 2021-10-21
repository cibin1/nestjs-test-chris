import { Controller, Get, Param } from '@nestjs/common';
import {ApiStatusService} from "./api-status.service";

@Controller('api-status')
export class ApiStatusController {

    constructor(private service: ApiStatusService) { }

    @Get('save')
    get(@Param() params) {
        return this.service.getInfo();
    }
}
