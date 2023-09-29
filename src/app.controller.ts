import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('viewer')
export class AppController {
  constructor(private readonly appService: AppService) {}

// @Get('getSignalingChannelEndpoints/:channelARN')
//   async getSignalingChannelEndpoints(
//     @Param('channelARN') channelARN: string,
//   ): Promise<any> {
//     try {
//       return await this.appService.getSignalingChannelEndpoints(channelARN);
//     } catch (error) {
//       throw new Error('Failed to get signaling channel endpoints');
//     }
//   }
}
