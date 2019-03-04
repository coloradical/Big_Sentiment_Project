/**
 *
 * Asynchronously loads the component for CustomVisuals
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
