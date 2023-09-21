import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import {
  TweetV2PostTweetResult,
  TwitterApi,
  TwitterApiV2Settings,
} from 'twitter-api-v2';

@Injectable()
export class TweetTaskJob {
  private readonly logger = new Logger(TweetTaskJob.name);

  @Cron(CronExpression.EVERY_6_HOURS)
  async handleCron() {
    // twitter credentials
    // OAuth 1.0a (User context)
    const client = new TwitterApi({
      appKey: 'consumerAppKey',
      appSecret: 'consumerAppSecret',
      accessToken: 'accessOAuthToken',
      accessSecret: 'accessOAuthSecret',
    });

    TwitterApiV2Settings.debug = true; // enabling debug mood
    // create new tweet
    await client.v2
      .tweet({
        text: 'tweet',
      })
      .then((resp: TweetV2PostTweetResult) => {
        console.log('then ' + resp.data);
      })
      .catch((resp: TweetV2PostTweetResult) => {
        console.log('catch ' + resp + JSON.stringify(resp.data));
      });
  }
}
