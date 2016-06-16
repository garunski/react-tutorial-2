import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import { ManageCoursePage } from './ManageCoursePage';

describe('Manage Course page', () => {
    it('sets the error message when trying to save empty title', () => {
        const props = {
            actions: {
                saveCourse: () => { return Promise.resolve(); }
            },
            authors: [],
            course: { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' }
        };

        const wrapper = mount(<ManageCoursePage {...props} />);
        const saveButton = wrapper.find('input').last();

        expect(saveButton.prop('type')).toBe('submit');
        saveButton.simulate('click');

        expect(wrapper.state().errors.title).toBe('Title must be at least 1 character.');

    });
});