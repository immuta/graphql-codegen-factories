import { buildSchema, parse } from "graphql";
import { plugin } from "../plugin";

describe("plugin", () => {
  it("should generate factories for operations", async () => {
    const schema = buildSchema(/* GraphQL */ `
      type User {
        id: ID!
        username: String!
        preferences: UserPreferences!
        followers: [User!]!
      }

      type UserPreferences {
        email: Boolean
        inApp: Boolean
        sms: Boolean
      }

      type Query {
        users: [User!]!
      }

      type Mutation {
        createUser(username: String): User!
      }
    `);
    const ast = parse(/* GraphQL */ `
      mutation CreateUser($username: String) {
        createUser(username: $username) {
          id
          username
          communications: preferences {
            email
          }
          followers {
            id
          }
        }
      }
    `);

    const output = await plugin(
      schema,
      [{ location: "CreateUser.graphql", document: ast }],
      {}
    );
    expect(output).toMatchSnapshot();
  });

  it("should ignore the namespace for the operations types", async () => {
    const schema = buildSchema(/* GraphQL */ `
      type User {
        id: ID!
        username: String!
      }

      type Query {
        users: [User!]!
      }

      type Mutation {
        createUser(username: String): User!
      }
    `);
    const ast = parse(/* GraphQL */ `
      mutation CreateUser($username: String) {
        createUser(username: $username) {
          id
          username
        }
      }
    `);

    const output = await plugin(
      schema,
      [{ location: "CreateUser.graphql", document: ast }],
      { namespacedImportName: "types.ts" }
    );
    expect(output).toMatchSnapshot();
  });
});
