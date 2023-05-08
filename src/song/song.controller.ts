import { Controller, Get, Post,Body } from "@nestjs/common";
import {SongService} from "./song.service"

@Controller('song')
export class SongController{
    constructor(private readonly  songService: SongService)

    @Post()
    create(@Body( createSongDto: createSongDto) {
        return this.songService.create( createSongDto)
    })
}

