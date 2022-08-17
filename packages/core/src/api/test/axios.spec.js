import axios from "axios";
import "../axiosInstance";

jest.mock("axios", () => ({
  __esModule: true,
  default: {
    interceptors: {
      request: { use: jest.fn(() => {}) },
      response: { use: jest.fn(() => {}) },
    },
  },
}));

const fakeError = {
  response: {
    status: undefined,
  },
};

const mockRequestCallback = (axios.interceptors.request.use).mock
  .calls[0][0];
const mockResponseErrorCallback = (axios.interceptors.response.use)
  .mock.calls[0][1];

beforeEach(() => {
});

test("request error interceptor", () => {
  expect(mockRequestCallback({})).toStrictEqual({
    baseURL: "http://localhost:5000",
  });
});

test("unexpected error on response interceptor", () => {
  fakeError.response.status = 500;

  mockResponseErrorCallback(fakeError).catch(() => {});
});

test("expected error on response interceptor", () => {
  fakeError.response.status = 400;

  mockResponseErrorCallback(fakeError).catch(() => {});
});
