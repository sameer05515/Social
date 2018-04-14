export class Post {
    status: string;
    likes: number;
    dislikes: number;

    constructor(status: string, likes?: number, dislikes?: number) {
        this.status = status;
        this.likes = likes || 0;
        this.dislikes = dislikes || 0;
    }

    like(): void {
        this.likes += 1;
    }

    dislike(): void {
        this.dislikes += 1;
    }
}
