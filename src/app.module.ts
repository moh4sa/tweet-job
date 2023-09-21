import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TweetTaskJob } from './TweetTaskJob.service';

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [],
  providers: [TweetTaskJob],
})
export class AppModule {}
