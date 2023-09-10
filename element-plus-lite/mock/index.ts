import { MockMethod } from "vite-plugin-mock";
import * as Mock from "mockjs";

const List = [] as any;
const count = 10;
for (let i = 0; i < count; i++) {
  List.push(
    Mock.mock({
      id: "@increment",
      name: "@first",
      "type|1": ["0", "1", "2", "3", "4", "5"],
      date: "@first",
      payment: "@float(0, 100, 2, 2)",
      remarks: "@title(1, 2)",
      money: "@integer(1, 3)",
    })
  );
}
export default [
  {
    url: "/quality/list",
    method: "get",
    response: () => {
      return {
        code: 20000,
        data: {
          list: [],
          pageIndex: 1,
          pageLimt: 10,
          total: 123,
        },
        message: "保质期列表请求成功",
      };
    },
  },
  // table List
  {
    url: "/table/list",
    method: "get",
    response: ({ pageIdx = 1, pageSize = 10 }) => {
      const arr = [] as any;
      for (let i = 0; i < 10; i++) {
        arr.push({
          id: Mock.mock("@id()"),
          name: Mock.mock("@first()"),
          date: Mock.Random.now(),
          desic: Mock.mock("@sentence(3, 5)"),
          "flag|1-2": true,
          "status|1": ["ny", "nj", "nb"],
        });
      }
      return {
        code: 20000,
        data: {
          list: arr,
          pageIdx: pageIdx,
          pageSize: pageSize,
          pageCount: 100,
          "rowCount|20-100": 100,
        },
        message: "请求成功",
      };
    },
  },
  // 登录
  {
    url: "/login",
    method: "post",
    response: ({ query }) => {
      return {
        code: 20000,
        data: {
          token: "",
        },
      };
    },
  },
  // 消费
  {
    url: "/consumption/table",
    method: "get",
    timeout: 1200,
    response: {
      code: 20000,
      data: {
        list: List,
      },
    },
  },
  {
    url: "/api/text",
    method: "post",
    rawResponse: async (req, res) => {
      let reqbody = "";
      await new Promise((resolve) => {
        req.on("data", (chunk) => {
          reqbody += chunk;
        });
        req.on("end", () => resolve(undefined));
      });
      res.setHeader("Content-Type", "text/plain");
      res.statusCode = 200;
      res.end(`hello, ${reqbody}`);
    },
  },
] as MockMethod[];
