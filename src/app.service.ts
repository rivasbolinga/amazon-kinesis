import { Injectable } from '@nestjs/common';
import { KinesisVideo } from 'aws-sdk';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  private kinesisVideo: KinesisVideo;
  constructor(private readonly configService: ConfigService) {
    this.kinesisVideo = new KinesisVideo({
      accessKeyId: configService.get('AWS_ACCESS_KEY_ID'),
      secretAccessKey: configService.get('AWS_SECRET_ACCESS_KEY'),
      region: 'us-west-2',
    });
  }
}
