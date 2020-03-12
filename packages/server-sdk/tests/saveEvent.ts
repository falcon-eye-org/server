import { api } from './env';

describe("Save Events", () => {

    it("Should fail on incorrect api key", (done) => {
        api
        .post('/event')
        .send({})
        .then((result) => {
            expect(result.status).toBe(403);
            done();
        })
        .catch(done)
    });

    it("Should fail on incorrect event", (done) => {
        api
        .post('/event')
        .send({
            client: 'qwerty'
        })
        .then((result) => {
            expect(result.status).toBe(400);
            done();
        })
        .catch(done)
    });

    it("Should fail on incorrect event", (done) => {
        api
        .post('/event')
        .send({
            client: 'qwerty',
            events: [{
                idDevice: '123',
                timestamp: Date.now(),
                userAgent: 'Mozilla/5.0 (Windows NT 10.0; rv:68.0) Gecko/20100101 Firefox/68.0'
            }],
            timestamp: Date.now()
        })
        .then((result) => {
            expect(result.status).toBe(200);
            done();
        })
        .catch(done)
    });

});
