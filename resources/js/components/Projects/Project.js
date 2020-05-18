import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as projectsActions from '../../actions/projectsActions';

const Project = () => (
    <div>project</div>
);

const mapStateToProps = ({projectsReducer}) => projectsReducer;
export default connect(mapStateToProps, projectsActions)(Project);