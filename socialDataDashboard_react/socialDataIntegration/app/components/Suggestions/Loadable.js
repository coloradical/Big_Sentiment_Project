/**
 *
 * Asynchronously loads the component for Suggestions
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
