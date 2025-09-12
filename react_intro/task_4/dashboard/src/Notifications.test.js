import { shallow } from 'enzyme';
import { Notifications } from './Notifications';

describe('Notifications component', () => {
    it('should render without crashing', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toBe(true);
    });

    it('should render the div with the class Notifications', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('.Notifications').exists()).toBe(true);
    });

    it('has 3 list items', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('li')).toHaveLength(3);
    });

    it('should render the text Here is the list of notifications', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
    });
});