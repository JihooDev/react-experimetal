import { delay, http, HttpResponse } from 'msw'

const teamData = ['토트넘', '리버풀', '맨시티'];

export const handlers = [
    http.get("/", async () => {
        await delay(4000);

        return HttpResponse.json(teamData)
    })
]