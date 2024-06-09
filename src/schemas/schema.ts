import { mergeTypeDefs } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";

const types = [ loadFilesSync(__dirname, { extensions: ['graphql']})]

export default mergeTypeDefs(types)