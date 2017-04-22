import chai from 'chai';
import model from '../../models/';


process.env.NODE_ENV = 'test';

const should = chai.should();

describe('Create Models', () => {
  it('should have Roles Model', () => {
    should.exist(model.Role);
  });
  it('should have Users Model', () => {
    should.exist(model.User);
  });
  it('should have Documents Model', () => {
    should.exist(model.Document);
  });
});
