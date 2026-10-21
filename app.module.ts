import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { Aluno } from './alunos/aluno.entity.js';
import { Livro } from './livro.entity.js';
import { Produto } from './produto.entity.js';
import { Modalidade } from './modalidade.entity.js';
import { Evento } from './evento.entity.js';
import { Veiculo } from './veiculo.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'12345678',
      database:'escola_db2',
      entities:[Livro, Produto, Modalidade, Veiculo, Evento],
      synchronize:true,
      logging:true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
