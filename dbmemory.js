import { randomUUID } from 'crypto'

export class DbMemory {
    #videos = new Map()

    create(video) {
        const videoId = randomUUID
        this.#videos.set(videoId, video)
    }

    update(id, video) {
        this.#videos.set(id, video)
    }

    delete(id) {
        this.#videos.delete(id)
    }

    list() {
        return Array.from(this.#videos.values())
    }

    count() {
        return this.#videos.length()
    }
}
