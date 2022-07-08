import { Types } from 'mongoose';
import User from '../User';

describe('User Model', () => {
  it('should throw an error if firstName is not provided', () => {
    let user = new User({
      id: '123',
      lastName: 'foo'
    });

    var error = user.validateSync();
    expect(error?.message).toEqual('user validation failed: firstName: Path `firstName` is required.');
  });
});

