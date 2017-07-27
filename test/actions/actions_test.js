import { expect } from '../test_helper';
import { SAVE_COMMENT } from '../../src/actions/types';
import { saveComment } from '../../src/actions';

describe('actions', () => {
  describe('saveComment', () => {
    let action;
    it('has the correct type', () => {
      action = saveComment();
      expect(action.type).to.equal(SAVE_COMMENT);
    });
    it('has the correct payload', () => {
      action = saveComment('new comment');
      expect(action.payload).to.equal('new comment');
    });
  })
})
