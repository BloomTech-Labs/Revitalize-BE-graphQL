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
    name: "ProjectDonation",
    embedded: false
  },
  {
    name: "ProjectImage",
    embedded: false
  },
  {
    name: "ProjectLike",
    embedded: false
  },
  {
    name: "ProjectComment",
    embedded: false
  },
  {
    name: "ProjectCommentLike",
    embedded: false
  },
  {
    name: "ProjectTrade",
    embedded: false
  },
  {
    name: "ProjectStudent",
    embedded: false
  },
  {
    name: "ProjectMasterTradesman",
    embedded: false
  },
  {
    name: "ProjectApplicants",
    embedded: false
  },
  {
    name: "ProjectTasks",
    embedded: false
  },
  {
    name: "ProjectTaskApprentices",
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
