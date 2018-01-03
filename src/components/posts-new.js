import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { createPost } from '../actions';
import { connect } from 'react-redux';

class PostsNew extends Component {
    onFormSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    renderField(field) {
        let {meta: {touched, error}} = field;
        let fieldClassName = `form-control ${ (touched && error) ? 'is-invalid' : '' }`;
        let feedbackClassName = `${ (touched && error) ? 'invalid-feedback' : '' }`;

        return (
            <div className="form-group row">
                <div className="col-6">
                    <label className="form-control-label" htmlFor={field.id}>{field.label}</label>
                    <input
                     id={field.id}
                     type={field.fieldType}
                     className={fieldClassName}
                     placeholder={field.label}
                     {...field.input} />
                     <div className={feedbackClassName}>
                        { (touched && error) ? error : '' }
                     </div>
                 </div>
            </div>            
        )
    }

    render() {
        let handleSubmit = this.props.handleSubmit;

        return (
            <section>
                <h1>Create a Post</h1>
                <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
                    <Field id="title" name="title" label="Title" fieldType="text" component={this.renderField} />
                    <Field id="categories" name="categories" label="Categories" fieldType="text" component={this.renderField} />
                    <Field id="content" name="content" label="Content" fieldType="text" component={this.renderField} />
                    <button type="submit" className="btn btn-warning font-weight-bold">Create Post</button>
                    <Link to="/" className="btn btn-danger font-weight-bold ml-3">Cancel</Link>
                </form>
            </section>
        )
    }
}

function validate(values) {
    let errors = {};

    if(!values.title) {
        errors.title = 'Please provide a title';
    }

    if(!values.categories) {
        errors.categories = 'Please provide the category';
    }

    if(!values.content) {
        errors.content = 'Please provide some content';
    }

    return errors;
}

export default reduxForm({
    validate: validate,
    form: 'PostNewForm'
})(
    connect(null, { createPost } )(PostsNew)
);