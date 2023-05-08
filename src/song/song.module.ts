import { Module } from '@nestjs/common';
import { SongService } from './song/song.service';
import { SongController } from './song/song.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Song } from './entities/song.entitiy';

@Module({
  imports: [TypeOrmModule.forFeature([Song])],
  controllers: [SongController],
  providers: [SongService],
})

export class SongModule {}
