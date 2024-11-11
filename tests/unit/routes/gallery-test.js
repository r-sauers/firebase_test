import { module, test } from 'qunit';
import { setupTest } from 'flashcard/tests/helpers';

module('Unit | Route | gallery', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:gallery');
    assert.ok(route);
  });
});
