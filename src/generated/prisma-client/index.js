"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "UserAccount",
    embedded: false
  },
  {
    name: "ExternalAccount",
    embedded: false
  },
  {
    name: "UserProfile",
    embedded: false
  },
  {
    name: "Project",
    embedded: false
  },
  {
    name: "ProjectLike",
    embedded: false
  },
  {
    name: "Comment",
    embedded: false
  },
  {
    name: "CommentLike",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `${process.env["PRISMA_ENDPOINT"]}`,
  secret: `${process.env["PRISMA_SECRET"]}`
});
exports.prisma = new exports.Prisma();
