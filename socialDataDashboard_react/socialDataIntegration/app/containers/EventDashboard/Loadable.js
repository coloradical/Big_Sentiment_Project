/**
 *
 * Asynchronously loads the component for EventDashboard
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
