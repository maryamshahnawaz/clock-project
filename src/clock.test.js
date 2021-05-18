import React from 'react';
import { mount, shallow } from 'enzyme';
import DigitalClock from "./DigitalClock";
import AnalogClock from "./AnalogClock";

describe("AnalogClock", () => {
  it("should render my component", () => {
    const wrapper = shallow(<AnalogClock />);
  });
});
describe('Clock', () => {
  describe('<time> element', () => {
    it('is rendered properly', () => {
      const component = shallow(
        <DigitalClock />,
      );
    });
  });
});