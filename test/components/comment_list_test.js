import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
  let component;

  beforeEach(() => {
    const props = { comments: ['Hello', 'this is a comment', 'last comment'] };
    component = renderComponent(CommentList, null, props);
  });

  it('shows an LI for each comment', () => {
    expect(component.find('li').length).to.equal(3);
  });

  it('shows each comment provided', () => {
    expect(component).to.contain('Hello');
    expect(component).to.contain('this is a comment');
    expect(component).to.contain('last comment');
  });

})
