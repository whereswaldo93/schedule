import React, { Component } from 'react';
import Icon from '../icon';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <label className="library-course__title">Problem Solving</label>
                { Icon('fas fa-check', 'library-course__icon') }
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, vel et ante viverra nunc eu, mus ornare tristique euismod sed non neque.</p>
                </div>
            </div>
        );
    }
}

export default LibraryCourse;