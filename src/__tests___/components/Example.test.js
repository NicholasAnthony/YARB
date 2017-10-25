import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Example from 'Example';

Enzyme.configure({ adapter: new Adapter() });

describe('Example', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Example/>, div);
    });

    describe('render', () => {
        it('should render the example', () => {
            const example = shallow(<Example examplePropText={'example text'}/>);
            const text = <span className="example-text">EXAMPLE TEXT</span>;

            expect(example.contains(text)).toEqual(true);
        });
    });

    // describe('formatTime', () => {
    //     it('should format seconds', () => {
    //         const clock = shallow(<Example/>);
    //         const seconds = 635;
    //         const expected = '10:35';
    //         const actual = example.instance().formatTime(seconds);

    //         expect(actual).toBe(expected);
    //     });

    //     it('should format seconds when minutes or seconds are less than 10', () => {
    //         const clock = shallow(<Example/>);
    //         const seconds = 65;
    //         const expected = '01:05';
    //         const actual = example.instance().formatTime(seconds);

    //         expect(actual).toBe(expected);
    //     });
    // });
});