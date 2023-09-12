import { Injectable } from '@nestjs/common';
import { KinesisVideo } from 'aws-sdk';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  private kinesisVideo: KinesisVideo;
  constructor(private readonly configService: ConfigService) {
    this.kinesisVideo = new KinesisVideo({
      accessKeyId: 'ACCESS_KEY_ID_GOES_HERE',
      secretAccessKey: 'SECRET_ACCESS_KEY_GOES_HERE',
      region: 'us-west-2',
    });
  }
}
