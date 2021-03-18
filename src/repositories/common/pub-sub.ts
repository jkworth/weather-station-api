import { Injectable } from '@nestjs/common';
import { PubSub } from 'apollo-server-express';

@Injectable()
export class ApiPubSub extends PubSub {}
