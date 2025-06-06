import React from 'react';

const Form = ({type, post, setPost, submitting, handleSubmit}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
      <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let yout imagination run wild with any AI-Powered platforms
      </p>

      <form
      onSubmit={handleSubmit}
      className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">Your AI Prompt</span>
        </label>
        <textarea
        value={post.prompt}
        onChange={(e) => e.setPost({...post, prompt: e.target.value})}
        placeholder="Write your AI Prompt..."
        className="form_text"
        ></textarea>
      </form>
    </section>
  )
}

export default Form
