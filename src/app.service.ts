import { Injectable } from '@nestjs/common';
import AWS from 'aws-sdk';
import { SignalingClient } from 'amazon-kinesis-video-streams-webrtc';

@Injectable()
export class AppService {
  constructor() {
    // DescribeSignalingChannel API can also be used to get the ARN from a channel name.
  //   const channelARN =
  //     'arn:aws:kinesisvideo:us-west-2:123456789012:channel/test-channel/1234567890';

  //   const kinesisVideo = new AWS.KinesisVideo({
  //     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  //     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  //     region: 'us-west-2',
  //     correctClockSkew: true,
  // })
}
}