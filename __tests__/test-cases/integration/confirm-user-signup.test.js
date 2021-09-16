const given = require('../../steps/given');
const when = require('../../steps/when');
const then = require('../../steps/then');
const chance = require('chance').Chance();

describe('When confirmUserSignup runs', () => {
  it("saves user's profile in DynamoDB", async () => {
    const { name, email } = given.a_random_user();
    const username = chance.guid();

    await when.we_invoke_confirmUser_signup(name, email, username);

    const ddbUser = await then.user_exists_in_UsersTable(username);

    expect(ddbUser).toMatchObject({
      id: 
    });
  });
});
