import React from "react";

// Formik is used to create form without using HTML form
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

function CreatePost(){
    
    const initialValues = {
        title:"",
        postText:"",
        username:""
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required(),
        postText: Yup.string().required(),
        username:Yup.string().min(3).max(15).required()
    });

    const onSubmit = (data) => {
        console.log(data);
    };
    
    
    return <div className="createPostPage">

        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form className="formContainer">
                <label>Title: </label>
                <ErrorMessage name="title" component="span"/>
                <Field autocomplete="off" id="inputCreatePost" name="title" placeholder="(Ex.Title..)"/>
                <label>Post: </label>
                <ErrorMessage name="postText" component="span" />
                <Field autocomplete="off" id="inputCreatePost" name="postText" placeholder="(Ex.Post..)"/>
                <label>Username: </label>
                <ErrorMessage name="username" component="span" />
                <Field autocomplete="off" id="inputCreatePost" name="username" placeholder="(Ex.John..)"/>

                <button type="submit"> Create Post</button>
            </Form>
        </Formik>

    </div>;
}

export default CreatePost;