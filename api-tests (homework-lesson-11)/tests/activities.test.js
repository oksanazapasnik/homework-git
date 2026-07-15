const api = require("../clients/apiClient");
const Ajv = require("ajv");
const activitySchema = require("../schemas/activity.schema");
const {
    validActivity,
    updatedActivity
} = require("../fixtures/activity.fixture");

const ajv = new Ajv();
const validate = ajv.compile(activitySchema);

describe("Activities API", () => {

    describe("Positive cases", () => {

        it("should return activities list", async () => {

            const response = await api.get("/Activities");

            expect(response.status).toBe(200);

            expect(Array.isArray(response.data)).toBe(true);

            expect(response.data.length).toBeGreaterThan(0);

            expect(validate(response.data[0])).toBe(true);

        });

        test.each([
            [1],
            [2],
            [3]
        ])("should return activity with id %i", async (id) => {

            const response = await api.get(`/Activities/${id}`);

            expect(response.status).toBe(200);

            expect(response.data).toHaveProperty("id");

            expect(response.data.id).toBe(id);

            expect(validate(response.data)).toBe(true);

        });

        it("should create a new activity", async () => {

            const response = await api.post(
                "/Activities",
                validActivity
            );

            expect(response.status).toBe(200);

            expect(response.data).toMatchObject(validActivity);

            expect(validate(response.data)).toBe(true);

        });

        it("should update an activity", async () => {

            const response = await api.put(
                "/Activities/1",
                updatedActivity
            );

            expect(response.status).toBe(200);

            expect(response.data.id).toBe(1);

            expect(response.data.title).toBe(updatedActivity.title);

            expect(response.data.completed).toBe(updatedActivity.completed);

            expect(validate(response.data)).toBe(true);

        });

        it("should delete an activity", async () => {

            const response = await api.delete("/Activities/1");

            expect(response.status).toBe(200);

            expect(response.data).toBe("");

        });

        it("should respond in less than 1000 ms", async () => {

            const start = Date.now();

            const response = await api.get("/Activities");

            const duration = Date.now() - start;

            expect(response.status).toBe(200);

            expect(duration).toBeLessThan(1000);

        });

    });

    describe("Negative cases", () => {

        it("should return 404 for non-existing activity", async () => {

            const response = await api.get("/Activities/999999");

            expect(response.status).toBe(404);

            expect(response.data).toHaveProperty("title");
            expect(response.data.title).toBe("Not Found");

            expect(response.data).toHaveProperty("status");
            expect(response.data.status).toBe(404);

        });

        it("should return error for invalid activity id", async () => {

            const response = await api.get("/Activities/invalid-id");

            expect(response.status).toBe(400);

            expect(response.data).toHaveProperty("title");
            expect(response.data.title).toBe("One or more validation errors occurred.");

            expect(response.data).toHaveProperty("status");
            expect(response.data.status).toBe(400);

        });

        it("should return error for invalid delete request", async () => {

            const response = await api.delete("/Activities/invalid-id");

            expect(response.status).toBe(400);

            expect(response.data).toHaveProperty("title");
            expect(response.data.title).toBe("One or more validation errors occurred.");

            expect(response.data).toHaveProperty("status");
            expect(response.data.status).toBe(400);

            expect(response.data).toHaveProperty("errors");
            expect(response.data.errors).toHaveProperty("id");

        });

    });

});