//react people are very happy about the fact that the reducers are so easy to test...

import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe('Course Reducer', () => {
    it('should add course when passed CREATE_COURSES_SUCCESS', () => {
        const initialState = [
            { title: 'A' },
            { title: 'B' }
        ];

        const newCourse = { title: 'C' };

        const action = actions.createCoursesSuccess(newCourse);

        const newState = courseReducer(initialState, action);

        expect(newState.length).toEqual(3);
        expect(newState[0].title).toEqual('A');
    });
});
