import {
    Body,
    Controller, Delete, Get, Param, Patch, Post,
} from "@nestjs/common";
import {
    BoardsService,
} from "./boards.service";
import {
    Board, BoardStatus,
} from "./boards.model";
import {
    CreateBoardDto,
} from "./dto/create-board.dto";

@Controller("boards")
export class BoardsController {
    constructor(private boardsService: BoardsService) {
    }

    @Get("/")
    getAllBoard(): Board[] {
        return this.boardsService.getAllBoards();
    }

    @Post()
    createBoard(
        @Body() createBoardDto: CreateBoardDto
    ): Board {
        return this.boardsService.createBoard(createBoardDto);
    }

    @Get("/:id")
    getBoardById(@Param("id") id: string) {
        return this.boardsService.getBoardByID(id);
    }

    @Delete("/:id")
    deleteBoard(@Param("id") id: string): void {
        this.boardsService.deleteBoard(id);
    }

    @Patch("/:id/status")
    updateBoardStatus(
        @Param("id") id: string,
        @Body("status") status: BoardStatus,
    ) {
        return this.boardsService.updateBoardsStatus(id, status);
    }
}