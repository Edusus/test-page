import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject:[ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: "localhost",
        //configService.get('HOST'),
        port: 5432,
        //configService.get('PORT'),
        username: "postgres",
        //configService.get('USERNAME'),
        password: "capibara123",
        //configService.get('PASSWORD')
        database: "postgres",
        //configService.get('DATABASE'),
        autoLoadEntities: true,
        synchronize: true
      })
    }),
    UserModule,
    ProductsModule,
    OrdersModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
