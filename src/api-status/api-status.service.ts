import {Injectable, Inject} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {ApiStatusEntity} from "./api-status.entity";
import * as contentful from 'contentful-management'
import * as contenfulEnviroments from '../enviroments/contentful-dev.json'
import {rejects} from "assert";


@Injectable()
export class ApiStatusService {
    contenfulEnv = contenfulEnviroments;
    client = contentful.createClient({accessToken: this.contenfulEnv.accessToken}, {type: 'plain'})

    constructor(@InjectRepository(ApiStatusEntity) private apiRepository: Repository<ApiStatusEntity>) {
    }

    getInfo(): Promise<any> {
        return new Promise(resolve => {
            const environment = this.client.environment.get({
                spaceId: this.contenfulEnv.spaceId,
                environmentId: this.contenfulEnv.environmentId
            }).then(result => {
                this.apiRepository.save({response: 'ok', status: 200}).then(r => {
                    console.log('save complete to DB ', result )
                    resolve(result)
                })
            }).catch(err => {
                this.apiRepository.save({response: 'ko', status: 401}).then(r => {
                    console.log('save error to DB')
                    resolve(err)
                })
            })
        });
    }

}
