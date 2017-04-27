import { chai } from 'meteor/practicalmeteor:chai';
import { resolvers, typeDefs } from './schema';
const { assert } = chai;


// Here is a front and server test - unit 
describe('my schema', function () {
  it('exports the type definition', function () {
    // This code will be executed by the test driver when the app is started
    // as a single test
    assert.isArray(typeDefs);
    assert.lengthOf(typeDefs, 1);
    assert.isString(typeDefs[0]);
  });
  describe('defines a resolver utility', function () {
    it('that exists', function () {
      assert.isDefined(resolvers);
    });
    it('defines a Query object', function () {
      assert.isDefined(resolvers);
      assert.isObject(resolvers.Query);
      assert.isFunction(resolvers.Query.user);
    });
    
    it('defines the User schema', function () {
      assert.isDefined(resolvers);
      assert.isObject(resolvers.User);
      assert.isFunction(resolvers.User.emails);
      assert.isFunction(resolvers.User.randomString);
    });
  });
});