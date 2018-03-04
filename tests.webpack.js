import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

var context = require.context('./src', true, /.+\.spec\.jsx?$/);
context.keys().forEach(context);
