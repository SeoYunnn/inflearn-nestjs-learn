import {
    Injectable,
} from '@nestjs/common';
import {
    Board, BoardStatus,
} from "./boards.model";
import {
    v1 as uuid,
} from "uuid";
import {
    CreateBoardDto,
} from "./dto/create-board.dto";

@Injectable()
export class BoardsService {
    private boards: Board[] = [];

    getAllBoards(): Board[] {
        return this.boards;
    }

    createBoard(creteBoardDto:CreateBoardDto) {
        const {
            title, description,
        } = creteBoardDto;

        const board = {
            id: uuid(),
            title,
            description,
            status: BoardStatus.PUBLIC,
        };

        this.boards.push(board);

        return board;
    }

    getBoardByID(id: string) : Board {
        return this.boards.find((board) => board.id === id);
    }

    deleteBoard(id: string): void {
        this.boards = this.boards.filter((board) => board.id !== id);
    }

    updateBoardsStatus(id: string, status: BoardStatus): Board {
        const board: Board | undefined = this.getBoardByID(id);
        board.status = status;

        return board;
    }
}