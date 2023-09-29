import {
  KinesisVideoClient,
  GetSignalingChannelEndpointCommand,
} from '@aws-sdk/client-kinesis-video';
import {
  KinesisVideoSignalingClient,
  GetIceServerConfigCommand,
} from '@aws-sdk/client-kinesis-video-signaling';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly kinesisVideoClient: KinesisVideoClient;
  private readonly kinesisVideoSignalingClient: KinesisVideoSignalingClient;

  constructor() {
    this.kinesisVideoClient = new KinesisVideoClient({ region: 'us-west-2' });

    this.kinesisVideoSignalingClient =
      new KinesisVideoSignalingClient({
        region: 'us-west-2',
        endpoint: 'WSS_ENDPOINT_GOES_HERE', // Replace with your actual endpoint
      });
  }

  async getSignalingChannelEndpoints(channelARN: string): Promise<any> {
    try {
      const command = new GetSignalingChannelEndpointCommand({
        ChannelARN: channelARN,
        SingleMasterChannelEndpointConfiguration: {
          Protocols: ['WSS', 'HTTPS'],
          Role: 'VIEWER',
        },
      });
      const getSignalingChannelEndpointResponse =
        await this.kinesisVideoClient.send(command);

      const endpointsByProtocol =
        getSignalingChannelEndpointResponse.ResourceEndpointList.reduce(
          (endpoints, endpoint) => {
            endpoints[endpoint.Protocol] = endpoint.ResourceEndpoint;
            return endpoints;
          },
          {},
        );

      return endpointsByProtocol;
    } catch (error) {
      console.error('Error getting signaling channel endpoints:', error);
      throw new Error('Failed to get signaling channel endpoints');
    }
  }
}
