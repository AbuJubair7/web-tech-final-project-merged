import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormConfig from 'ormconfig';
import { TaskManagementModule } from './task-management/task-management.module';
import { RecipientsManagementModule } from './recipients-management/recipients-management.module';
import { CampaignModule } from './campaign/campaign.module';
import { FeedbacksModule } from './feedbacks/feedbacks.module';
import {
  MiddlewareConsumer,
  NestModule,
} from '@nestjs/common';
import { RequestMethod } from '@nestjs/common';
import { ContactModule } from './contact/contact.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ValidationMiddleware } from './middleware/validation-middleware';
import { TrackingModule } from './leadTracking/tracking.module';
import { SubscriptionModule } from './subscription/subscription.module';

import { ProfileModule } from './profile/profile.module';
import { NotificationModule } from './notification/notification.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { MailModule } from './mailer/mail.module';
import { MailController } from './mailer/mail.controller';
import { MailService } from './mailer/mail.service';
import { AuthService } from './auth/auth.service';
import { ProfileService } from './profile/profile.service';
import { ProfileController } from './profile/profile.controller';
import { Users } from './entities/users.entity';

@Module({
  imports: [
    NotificationModule, AnalyticsModule,MailModule,
    ProfileModule,
    UserModule,
    AuthModule,
    ContactModule,
    TrackingModule,
    SubscriptionModule,
    TypeOrmModule.forRoot(ormConfig),TaskManagementModule,  RecipientsManagementModule, CampaignModule, FeedbacksModule],
  controllers: [MailController],
  providers: [MailService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ValidationMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}

